import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { MessageService } from '@wawjs/ngx-prime/api';
import { TranslateService } from '@wawjs/ngx-translate';
import { BaristasService } from '../../../meetka/baristas.service';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { InterestChipsComponent } from '../../../shared/meetka/interest-chips.component';

@Component({
	selector: 'app-barista-profile',
	imports: [ButtonModule, TagModule, InterestChipsComponent],
	templateUrl: './barista-profile.component.html',
	styleUrl: './barista-profile.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaristaProfilePageComponent {
	private readonly _router = inject(Router);
	private readonly _baristasService = inject(BaristasService);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _id = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly barista = computed(() => this._baristasService.get(this._id()));
	readonly coffeeShop = computed(() => {
		const barista = this.barista();
		return barista ? this._coffeeShopsService.get(barista.coffeeShopId) : undefined;
	});

	openCoffeeShop(): void {
		const shop = this.coffeeShop();
		if (shop) this._router.navigate(['/coffee-shop', shop.id]);
	}

	shareProfile(): void {
		const barista = this.barista();
		if (!barista) return;
		const url = `${window.location.origin}/barista/${barista.id}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Link copied to clipboard')(),
			});
		});
	}
}
