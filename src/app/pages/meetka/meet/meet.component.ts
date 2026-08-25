import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { MessageService } from '@wawjs/ngx-prime/api';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { InterestChipsComponent } from '../../../shared/meetka/interest-chips.component';

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

@Component({
	selector: 'app-meet',
	imports: [RouterLink, ButtonModule, TagModule, AvatarModule, InterestChipsComponent],
	templateUrl: './meet.component.html',
	styleUrl: './meet.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	private readonly _messageService = inject(MessageService);
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly meet = computed(() => this._meetsService.get(this._id()));
	readonly coffeeShop = computed(() => {
		const meet = this.meet();
		return meet ? this._coffeeShopsService.get(meet.coffeeShopId) : undefined;
	});

	readonly currentUserId = computed(() => this.userService.user()?._id ?? '');
	readonly isOrganizer = computed(() => {
		const meet = this.meet();
		return !!meet && !!this.currentUserId() && meet.organizerId === this.currentUserId();
	});

	readonly isGoing = computed(() => {
		const meet = this.meet();
		if (!meet) return false;
		return meet.participants.some((p) => p.userId === this.currentUserId() && p.going);
	});

	readonly goingParticipants = computed(
		() => this.meet()?.participants.filter((p) => p.going) ?? [],
	);

	readonly isFull = computed(() => {
		const meet = this.meet();
		return !!meet?.participantLimit && this.goingParticipants().length >= meet.participantLimit;
	});

	readonly recurrenceLabel = computed(() => {
		const recurring = this.meet()?.recurring;
		if (!recurring) return '';

		const days = recurring.days.map((d) => WEEKDAY_LABELS[d]).join(', ');
		switch (recurring.type) {
			case 'weekly':
				return days ? `Weekly on ${days}` : 'Weekly';
			case 'biweekly':
				return days ? `Every two weeks on ${days}` : 'Every two weeks';
			case 'monthly':
				return 'Monthly';
			default:
				return '';
		}
	});

	toggleGoing(): void {
		const meet = this.meet();
		const user = this.userService.user();
		if (!meet) return;

		if (!user?._id) {
			this._router.navigate(['/sign'], { queryParams: { returnUrl: `/meet/${meet.id}` } });
			return;
		}

		this._meetsService.setGoing(meet.id, user._id, user.name ?? '', user.thumb ?? 'default.png', !this.isGoing());
	}

	removeParticipant(userId: string): void {
		const meet = this.meet();
		if (!meet) return;
		this._meetsService.removeParticipant(meet.id, userId);
	}

	editMeet(): void {
		const meet = this.meet();
		if (!meet) return;
		this._router.navigate(['/meet/mutate'], { queryParams: { id: meet.id } });
	}

	cancelMeet(): void {
		const meet = this.meet();
		if (!meet) return;
		this._meetsService.cancel(meet.id);
		this._messageService.add({
			severity: 'info',
			detail: this.translateService.translate('Meet cancelled')(),
		});
		this._router.navigate(['/my-meets']);
	}

	openCoffeeShop(): void {
		const shop = this.coffeeShop();
		if (shop) this._router.navigate(['/coffee-shop', shop.id]);
	}

	openMenu(): void {
		const shop = this.coffeeShop();
		if (shop) this._router.navigate(['/menu', shop.id]);
	}

	shareMeet(): void {
		const meet = this.meet();
		if (!meet) return;
		const url = `${window.location.origin}/meet/${meet.id}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Link copied to clipboard')(),
			});
		});
	}
}
