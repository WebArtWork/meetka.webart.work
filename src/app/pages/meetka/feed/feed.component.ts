import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { GeoService } from '../../../meetka/geo.service';
import { distanceKm } from '../../../meetka/geo.util';
import { CoffeeShopCardComponent } from '../../../shared/meetka/coffee-shop-card.component';

type FeedAction = 'favourite' | 'ignore';

@Component({
	selector: 'app-feed',
	imports: [ButtonModule, CoffeeShopCardComponent],
	templateUrl: './feed.component.html',
	styleUrl: './feed.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	readonly geoService = inject(GeoService);
	readonly translateService = inject(TranslateService);

	readonly favouritedIds = signal<Set<string>>(this._restore('favourited'));
	readonly ignoredIds = signal<Set<string>>(this._restore('ignored'));

	readonly upcomingMeetCountByShop = computed(() => {
		const today = new Date().toISOString().slice(0, 10);
		const map = new Map<string, number>();
		for (const meet of this._meetsService.meets()) {
			if (!meet.active || meet.visibility !== 'public' || meet.date < today) continue;
			map.set(meet.coffeeShopId, (map.get(meet.coffeeShopId) ?? 0) + 1);
		}
		return map;
	});

	readonly feed = computed(() => {
		const favourited = this.favouritedIds();
		const ignored = this.ignoredIds();
		const userLocation = this.geoService.userLocation();
		return this._coffeeShopsService
			.shops()
			.filter((shop) => !favourited.has(shop.id) && !ignored.has(shop.id))
			.sort((a, b) => distanceKm(userLocation, a.location) - distanceKm(userLocation, b.location));
	});

	distanceToShop(location: { lat: number; lng: number }): number {
		return distanceKm(this.geoService.userLocation(), location);
	}

	open(slug: string): void {
		this._router.navigate(['/coffee-shop', slug]);
	}

	act(id: string, action: FeedAction): void {
		if (action === 'favourite') {
			this._update('favourited', this.favouritedIds, id);
		} else {
			this._update('ignored', this.ignoredIds, id);
		}
	}

	private _update(
		key: 'favourited' | 'ignored',
		state: ReturnType<typeof signal<Set<string>>>,
		id: string,
	): void {
		const next = new Set(state());
		next.add(id);
		state.set(next);
		this._persist(key, next);
	}

	private _restore(key: 'favourited' | 'ignored'): Set<string> {
		try {
			const raw = localStorage.getItem(`feed:${key}`);
			return raw ? new Set<string>(JSON.parse(raw)) : new Set<string>();
		} catch {
			return new Set<string>();
		}
	}

	private _persist(key: 'favourited' | 'ignored', value: Set<string>): void {
		try {
			localStorage.setItem(`feed:${key}`, JSON.stringify([...value]));
		} catch {
			// ignore storage failures (e.g. private browsing)
		}
	}
}
