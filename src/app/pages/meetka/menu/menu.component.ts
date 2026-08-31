import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { DecimalPipe } from '@angular/common';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../features/coffee-shop/coffee-shop.service';
import { meetkaSeoImage } from '../meetka.seo';

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
	private readonly _metaService = inject(MetaService);
	readonly translateService = inject(TranslateService);

	private readonly _slug = toSignal(
		inject(ActivatedRoute).paramMap.pipe(map((params) => params.get('coffeeShopSlug') ?? '')),
		{ initialValue: '' },
	);

	readonly shop = computed(() => this._coffeeShopsService.getBySlug(this._slug()));

	constructor() {
		effect(() => {
			const shop = this.shop();
			if (!shop) return;
			this._metaService.applyMeta({
				title: `${this.translateService.translate('Menu')()} — ${shop.name}`,
				description: shop.description,
				image: shop.photos[0] ?? meetkaSeoImage,
			});
		});
	}

	back(): void {
		this._router.navigate(['/coffee-shop', this._slug()]);
	}
}
