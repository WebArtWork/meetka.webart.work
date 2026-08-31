import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../features/coffee-shop/coffee-shop.service';
import { MeetsService } from '../../features/meet/meet.service';
import { GeoService } from '../geo/geo.service';
import { filterMeets, MeetsFilter } from '../../features/meet/meet-filter.util';
import { InterestsFilterComponent } from '../../components/interests-filter/interests-filter.component';
import { MeetShortComponent } from '../../features/meet/meet-short/meet-short.component';

@Component({
	selector: 'app-meets-list',
	imports: [FormsModule, SelectModule, ButtonModule, InterestsFilterComponent, MeetShortComponent],
	templateUrl: './meets-list.component.html',
	styleUrl: './meets-list.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetsListComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	readonly geoService = inject(GeoService);
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);

	/** 'all' (generic Meets page) vs. 'mine' (My Meets page) — same list/filters, different source set. */
	scope = input<'all' | 'mine'>('all');
	initialCoffeeShopId = input<string | null>(null);
	title = input('');
	/** Restrict the list to meets happening today (used by the home page). */
	todayOnly = input(false);

	readonly coffeeShops = this._coffeeShopsService.shops;

	readonly selectedInterestIds = signal<string[]>([]);
	readonly selectedCoffeeShopId = signal<string | null>(this.initialCoffeeShopId());
	readonly showPast = signal(false);

	readonly meets = computed(() => {
		const currentUserId = this.userService.user()?._id ?? '';
		const allMeets = this._meetsService.meets();

		const sourceMeets = this.scope() === 'mine'
			? allMeets.filter(
					(meet) =>
						meet.organizerId === currentUserId ||
						meet.participants.some((p) => p.userId === currentUserId),
				)
			: allMeets;

		const filter: MeetsFilter = {
			interestIds: this.selectedInterestIds(),
			coffeeShopId: this.selectedCoffeeShopId() ?? undefined,
			timeframe: this.todayOnly() || !this.showPast() ? 'upcoming' : 'all',
			date: this.todayOnly() ? new Date().toISOString().slice(0, 10) : undefined,
		};

		return filterMeets(sourceMeets, this._coffeeShopsService.shops(), filter)
			.sort((a, b) => a.date.localeCompare(b.date));
	});

	coffeeShopName(coffeeShopId: string): string {
		return this._coffeeShopsService.get(coffeeShopId)?.name ?? '';
	}

	openMeet(id: string): void {
		this._router.navigate(['/meet'], { queryParams: { id } });
	}

	toggleGoing(meetId: string, going: boolean): void {
		const user = this.userService.user();
		if (!user?._id) {
			this._router.navigate(['/sign'], { queryParams: { returnUrl: '/meets' } });
			return;
		}
		this._meetsService.setGoing(meetId, user._id, user.name ?? '', user.thumb ?? 'default.png', going);
	}
}
