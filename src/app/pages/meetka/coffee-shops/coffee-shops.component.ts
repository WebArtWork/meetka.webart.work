import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { GeoService } from '../../../meetka/geo.service';
import { distanceKm } from '../../../meetka/geo.util';
import { INTERESTS } from '../../../meetka/meetka.interests';
import { CoffeeShopCardComponent } from '../../../shared/meetka/coffee-shop-card.component';

@Component({
	selector: 'app-coffee-shops',
	imports: [FormsModule, InputTextModule, MultiSelectModule, ButtonModule, CoffeeShopCardComponent],
	templateUrl: './coffee-shops.component.html',
	styleUrl: './coffee-shops.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeShopsPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	readonly geoService = inject(GeoService);
	readonly translateService = inject(TranslateService);

	readonly interests = INTERESTS;

	private readonly _queryInterestIds = toSignal(
		inject(ActivatedRoute).queryParamMap,
		{ initialValue: null },
	);

	readonly searchTerm = signal('');
	readonly selectedInterestIds = signal<string[]>(
		this._queryInterestIds()?.get('interests')?.split(',').filter(Boolean) ?? [],
	);
	readonly nearbyOnly = signal(false);

	readonly upcomingMeetCountByShop = computed(() => {
		const today = new Date().toISOString().slice(0, 10);
		const map = new Map<string, number>();
		for (const meet of this._meetsService.meets()) {
			if (!meet.active || meet.visibility !== 'public' || meet.date < today) continue;
			map.set(meet.coffeeShopId, (map.get(meet.coffeeShopId) ?? 0) + 1);
		}
		return map;
	});

	readonly filteredShops = computed(() => {
		const term = this.searchTerm().toLowerCase().trim();
		const interestIds = this.selectedInterestIds();
		const nearbyOnly = this.nearbyOnly();
		const radiusKm = this.geoService.discoveryRadiusKm();
		const userLocation = this.geoService.userLocation();

		return this._coffeeShopsService
			.shops()
			.filter((shop) => {
				if (term && !shop.name.toLowerCase().includes(term) && !shop.address.toLowerCase().includes(term)) {
					return false;
				}

				if (interestIds.length && !shop.interestIds.some((id) => interestIds.includes(id))) {
					return false;
				}

				if (nearbyOnly && distanceKm(userLocation, shop.location) > radiusKm) {
					return false;
				}

				return true;
			})
			.sort((a, b) => distanceKm(userLocation, a.location) - distanceKm(userLocation, b.location));
	});

	distanceToShop(location: { lat: number; lng: number }): number {
		return distanceKm(this.geoService.userLocation(), location);
	}

	openCoffeeShop(id: string): void {
		this._router.navigate(['/coffee-shop', id]);
	}

	openOnMap(id: string): void {
		this._router.navigate(['/map'], { queryParams: { shop: id } });
	}
}
