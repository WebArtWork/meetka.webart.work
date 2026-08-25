import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { MessageService } from '@wawjs/ngx-prime/api';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { MeetsService } from '../../../meetka/meets.service';
import { BaristasService } from '../../../meetka/baristas.service';
import { InterestChipsComponent } from '../../../shared/meetka/interest-chips.component';
import { MeetCardComponent } from '../../../shared/meetka/meet-card.component';

@Component({
	selector: 'app-coffee-shop',
	imports: [RouterLink, ButtonModule, TagModule, InterestChipsComponent, MeetCardComponent],
	templateUrl: './coffee-shop.component.html',
	styleUrl: './coffee-shop.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeShopPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	private readonly _baristasService = inject(BaristasService);
	private readonly _messageService = inject(MessageService);
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly shop = computed(() => this._coffeeShopsService.get(this._id()));
	readonly baristas = computed(() => this._baristasService.byCoffeeShop(this._id()));

	readonly upcomingMeets = computed(() => {
		const today = new Date().toISOString().slice(0, 10);
		return this._meetsService
			.meets()
			.filter(
				(meet) =>
					meet.active &&
					meet.visibility === 'public' &&
					meet.coffeeShopId === this._id() &&
					!meet.recurring &&
					meet.date >= today,
			)
			.sort((a, b) => a.date.localeCompare(b.date))
			.slice(0, 5);
	});

	readonly recurringMeets = computed(() =>
		this._meetsService
			.meets()
			.filter((meet) => meet.active && meet.visibility === 'public' && meet.coffeeShopId === this._id() && !!meet.recurring),
	);

	readonly copiedShareLink = signal(false);

	coffeeShopName(): string {
		return this.shop()?.name ?? '';
	}

	openMeet(id: string): void {
		this._router.navigate(['/meet', id]);
	}

	openMenu(): void {
		this._router.navigate(['/menu', this._id()]);
	}

	openAllMeets(): void {
		this._router.navigate(['/meets'], { queryParams: { coffeeShop: this._id() } });
	}

	createMeet(): void {
		if (!this.userService.user()?._id) {
			this._router.navigate(['/sign'], { queryParams: { returnUrl: `/meet/mutate?coffeeShop=${this._id()}` } });
			return;
		}
		this._router.navigate(['/meet/mutate'], { queryParams: { coffeeShop: this._id() } });
	}

	shareCoffeeShop(): void {
		const url = `${window.location.origin}/coffee-shop/${this._id()}`;
		navigator.clipboard?.writeText(url).then(() => {
			this.copiedShareLink.set(true);
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Link copied to clipboard')(),
			});
			setTimeout(() => this.copiedShareLink.set(false), 2000);
		});
	}
}
