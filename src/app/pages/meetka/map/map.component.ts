import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { TranslateService } from '@wawjs/ngx-translate';
import { MapComponent as LibMap, LibMapMarker } from '@wawjs/ngx-map';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { GeoService } from '../../../meetka/geo.service';
import { GoogleMapsLoaderService } from '../../../meetka/google-maps-loader.service';
import { distanceKm } from '../../../meetka/geo.util';
import { INTERESTS } from '../../../meetka/meetka.interests';
import { CoffeeShopCardComponent } from '../../../shared/meetka/coffee-shop-card.component';
import { MeetCardComponent } from '../../../shared/meetka/meet-card.component';

@Component({
	selector: 'app-map',
	imports: [
		FormsModule,
		ButtonModule,
		InputTextModule,
		MultiSelectModule,
		DatePickerModule,
		LibMap,
		CoffeeShopCardComponent,
		MeetCardComponent,
	],
	templateUrl: './map.component.html',
	styleUrl: './map.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	private readonly _mapsLoader = inject(GoogleMapsLoaderService);
	readonly geoService = inject(GeoService);
	readonly translateService = inject(TranslateService);

	readonly interests = INTERESTS;

	readonly searchTerm = signal('');
	readonly selectedInterestIds = signal<string[]>([]);
	readonly selectedDate = signal<Date | null>(null);
	readonly selectedShopId = signal<string | null>(null);

	readonly mapAvailable = toSignal(from(this._mapsLoader.load()), { initialValue: null });

	readonly filteredShops = computed(() => {
		const term = this.searchTerm().toLowerCase().trim();
		const interestIds = this.selectedInterestIds();

		return this._coffeeShopsService.shops().filter((shop) => {
			if (term && !shop.name.toLowerCase().includes(term) && !shop.address.toLowerCase().includes(term)) {
				return false;
			}

			if (interestIds.length && !shop.interestIds.some((id) => interestIds.includes(id))) {
				return false;
			}

			return true;
		});
	});

	readonly upcomingMeetsByShop = computed(() => {
		const today = new Date().toISOString().slice(0, 10);
		const selectedDate = this.selectedDate();
		const dateFilter = selectedDate ? selectedDate.toISOString().slice(0, 10) : null;

		const map = new Map<string, number>();
		for (const meet of this._meetsService.meets()) {
			if (!meet.active || meet.visibility !== 'public' || meet.date < today) continue;
			if (dateFilter && meet.date !== dateFilter) continue;
			map.set(meet.coffeeShopId, (map.get(meet.coffeeShopId) ?? 0) + 1);
		}
		return map;
	});

	readonly markers = computed<LibMapMarker[]>(() =>
		this.filteredShops().map((shop) => ({
			id: shop.id,
			position: shop.location,
			title: shop.name,
			label: String(this.upcomingMeetsByShop().get(shop.id) ?? ''),
		})),
	);

	readonly selectedShop = computed(() => {
		const id = this.selectedShopId();
		return id ? this._coffeeShopsService.get(id) : undefined;
	});

	readonly selectedShopMeets = computed(() => {
		const shop = this.selectedShop();
		if (!shop) return [];
		const today = new Date().toISOString().slice(0, 10);
		return this._meetsService
			.meets()
			.filter((meet) => meet.active && meet.visibility === 'public' && meet.coffeeShopId === shop.id && meet.date >= today)
			.slice(0, 3);
	});

	distanceToShop(shopId: string): number {
		const shop = this._coffeeShopsService.get(shopId);
		if (!shop) return 0;
		return distanceKm(this.geoService.userLocation(), shop.location);
	}

	coffeeShopName(shopId: string): string {
		return this._coffeeShopsService.get(shopId)?.name ?? '';
	}

	onMarkerSelected(marker: LibMapMarker): void {
		this.selectedShopId.set(marker.id);
	}

	openCoffeeShop(id: string): void {
		this._router.navigate(['/coffee-shop', id]);
	}

	openMeet(id: string): void {
		this._router.navigate(['/meet', id]);
	}

	goToCoffeeShops(): void {
		this._router.navigate(['/coffee-shops']);
	}
}
