import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';

@Component({
	selector: 'app-menu',
	imports: [DecimalPipe, ButtonModule, TagModule],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuPageComponent {
	private readonly _router = inject(Router);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	readonly translateService = inject(TranslateService);

	private readonly _coffeeShopId = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('coffeeShopId') ?? '')),
		{ initialValue: '' },
	);

	readonly shop = computed(() => this._coffeeShopsService.get(this._coffeeShopId()));

	back(): void {
		this._router.navigate(['/coffee-shop', this._coffeeShopId()]);
	}
}
