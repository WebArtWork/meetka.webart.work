import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { MessageService } from '@wawjs/ngx-prime/api';
import { MetaService } from '@wawjs/ngx-core';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../features/coffee-shop/coffee-shop.service';
import { MeetsService } from '../../../features/meet/meet.service';
import { InterestShortComponent } from '../../../features/interest/interest-short/interest-short.component';
import { meetkaSeoImage } from '../meetka.seo';

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

@Component({
	selector: 'app-meet',
	imports: [ButtonModule, TagModule, AvatarModule, InterestShortComponent],
	templateUrl: './meet.component.html',
	styleUrl: './meet.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	private readonly _messageService = inject(MessageService);
	private readonly _metaService = inject(MetaService);
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		inject(ActivatedRoute).queryParamMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly meet = computed(() => this._meetsService.get(this._id()));
	readonly coffeeShop = computed(() => {
		const meet = this.meet();
		return meet ? this._coffeeShopsService.get(meet.coffeeShopId) : undefined;
	});

	constructor() {
		effect(() => {
			const meet = this.meet();
			if (!meet) return;
			this._metaService.applyMeta({
				title: meet.title,
				description: meet.description,
				image: this.coffeeShop()?.photos[0] ?? meetkaSeoImage,
			});
		});
	}

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
			this._router.navigate(['/sign'], { queryParams: { returnUrl: `/meet?id=${meet.id}` } });
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
		if (shop) this._router.navigate(['/coffee-shop', shop.slug]);
	}

	openMenu(): void {
		const shop = this.coffeeShop();
		if (shop) this._router.navigate(['/menu', shop.slug]);
	}

	shareMeet(): void {
		const meet = this.meet();
		if (!meet) return;
		const url = `${window.location.origin}/meet?id=${meet.id}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Link copied to clipboard')(),
			});
		});
	}
}
