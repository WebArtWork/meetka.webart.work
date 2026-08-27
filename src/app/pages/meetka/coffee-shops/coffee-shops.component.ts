import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { GeoService } from '../../../meetka/geo.service';
import { distanceKm } from '../../../meetka/geo.util';
import { CoffeeShopCardComponent } from '../../../shared/meetka/coffee-shop-card.component';
import { InterestsFilterComponent } from '../../../components/interests-filter/interests-filter.component';

@Component({
	selector: 'app-coffee-shops',
	imports: [RouterLink, ButtonModule, CoffeeShopCardComponent, InterestsFilterComponent],
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

	private readonly _queryInterestIds = toSignal(
		inject(ActivatedRoute).queryParamMap,
		{ initialValue: null },
	);

	readonly selectedInterestIds = signal<string[]>(
		this._queryInterestIds()?.get('interests')?.split(',').filter(Boolean) ?? [],
	);

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
		const interestIds = this.selectedInterestIds();
		const userLocation = this.geoService.userLocation();

		return this._coffeeShopsService
			.shops()
			.filter((shop) => {
				if (interestIds.length && !shop.interestIds.some((id) => interestIds.includes(id))) {
					return false;
				}

				return true;
			})
			.sort((a, b) => distanceKm(userLocation, a.location) - distanceKm(userLocation, b.location));
	});

	distanceToShop(location: { lat: number; lng: number }): number {
		return distanceKm(this.geoService.userLocation(), location);
	}

	openCoffeeShop(slug: string): void {
		this._router.navigate(['/coffee-shop', slug]);
	}
}
