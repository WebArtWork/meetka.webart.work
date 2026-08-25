import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../meetka/coffee-shops.service';
import { MeetsService } from '../../meetka/meets.service';
import { GeoService } from '../../meetka/geo.service';
import { INTERESTS } from '../../meetka/meetka.interests';
import { filterMeets, MeetsFilter } from '../../meetka/meets-filter.util';
import { MeetCardComponent } from './meet-card.component';

export type MyMeetsTab = 'upcoming' | 'going' | 'created' | 'recurring' | 'past';

@Component({
	selector: 'app-meets-list',
	imports: [FormsModule, InputTextModule, MultiSelectModule, SelectModule, DatePickerModule, ButtonModule, MeetCardComponent],
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

	/** Full filter bar (generic Meets page) vs. tab-based (My Meets page). */
	mode = input<'generic' | 'my'>('generic');
	initialCoffeeShopId = input<string | null>(null);

	readonly interests = INTERESTS;
	readonly coffeeShops = this._coffeeShopsService.shops;
	readonly timeframeOptions = [
		{ label: 'Upcoming', value: 'upcoming' as const },
		{ label: 'Past', value: 'past' as const },
		{ label: 'All', value: 'all' as const },
	];

	readonly searchTerm = signal('');
	readonly selectedInterestIds = signal<string[]>([]);
	readonly selectedCoffeeShopId = signal<string | null>(this.initialCoffeeShopId());
	readonly selectedDate = signal<Date | null>(null);
	readonly timeframe = signal<'upcoming' | 'past' | 'all'>('upcoming');

	readonly activeTab = signal<MyMeetsTab>('upcoming');
	readonly tabs: { key: MyMeetsTab; label: string }[] = [
		{ key: 'upcoming', label: 'Upcoming' },
		{ key: 'going', label: 'Going' },
		{ key: 'created', label: 'Created by me' },
		{ key: 'recurring', label: 'Recurring' },
		{ key: 'past', label: 'Past' },
	];

	readonly meets = computed(() => {
		const currentUserId = this.userService.user()?._id ?? '';

		const filter: MeetsFilter = this.mode() === 'my'
			? this._myFilter(currentUserId)
			: {
					search: this.searchTerm(),
					interestIds: this.selectedInterestIds(),
					coffeeShopId: this.selectedCoffeeShopId() ?? undefined,
					date: this.selectedDate() ? this.selectedDate()!.toISOString().slice(0, 10) : undefined,
					timeframe: this.timeframe(),
				};

		return filterMeets(this._meetsService.meets(), this._coffeeShopsService.shops(), filter)
			.sort((a, b) => a.date.localeCompare(b.date));
	});

	private _myFilter(currentUserId: string): MeetsFilter {
		switch (this.activeTab()) {
			case 'going':
				return { participantUserId: currentUserId, goingOnly: true, timeframe: 'upcoming' };
			case 'created':
				return { organizerId: currentUserId, timeframe: 'all' };
			case 'recurring':
				return { participantUserId: currentUserId, recurringOnly: true, timeframe: 'all' };
			case 'past':
				return { participantUserId: currentUserId, timeframe: 'past' };
			case 'upcoming':
			default:
				return { participantUserId: currentUserId, timeframe: 'upcoming' };
		}
	}

	coffeeShopName(coffeeShopId: string): string {
		return this._coffeeShopsService.get(coffeeShopId)?.name ?? '';
	}

	openMeet(id: string): void {
		this._router.navigate(['/meet', id]);
	}

	createMeet(): void {
		if (!this.userService.user()?._id) {
			this._router.navigate(['/sign'], { queryParams: { returnUrl: '/meet/mutate' } });
			return;
		}
		this._router.navigate(['/meet/mutate']);
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
