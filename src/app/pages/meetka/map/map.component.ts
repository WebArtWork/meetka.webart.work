import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeafletMapComponent, LeafletMapMarker } from '../../../shared/meetka/leaflet-map.component';
import { InterestsFilterComponent } from '../../../components/interests-filter/interests-filter.component';
import { CoffeeShopsService } from '../../../features/coffee-shop/coffee-shop.service';
import { MeetsService } from '../../../features/meet/meet.service';
import { GeoService } from '../../../shared/geo/geo.service';

@Component({
	selector: 'app-map',
	imports: [ButtonModule, LeafletMapComponent, InterestsFilterComponent],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	readonly geoService = inject(GeoService);
	readonly translateService = inject(TranslateService);

	readonly selectedInterestIds = signal<string[]>([]);

	readonly filteredShops = computed(() => {
		const interestIds = this.selectedInterestIds();

		return this._coffeeShopsService.shops().filter((shop) => {
			if (interestIds.length && !shop.interestIds.some((id) => interestIds.includes(id))) {
				return false;
			}

			return true;
		});
	});

	readonly upcomingMeetsByShop = computed(() => {
		const today = new Date().toISOString().slice(0, 10);

		const map = new Map<string, number>();
		for (const meet of this._meetsService.meets()) {
			if (!meet.active || meet.visibility !== 'public' || meet.date < today) continue;
			map.set(meet.coffeeShopId, (map.get(meet.coffeeShopId) ?? 0) + 1);
		}
		return map;
	});

	readonly markers = computed<LeafletMapMarker[]>(() =>
		this.filteredShops().map((shop) => ({
			id: shop.slug,
			position: shop.location,
			title: shop.name,
			label: String(this.upcomingMeetsByShop().get(shop.id) ?? ''),
		})),
	);

	onMarkerSelected(marker: LeafletMapMarker): void {
		this._router.navigate(['/coffee-shop', marker.id]);
	}

	goToCoffeeShops(): void {
		this._router.navigate(['/coffee-shops']);
	}
}
