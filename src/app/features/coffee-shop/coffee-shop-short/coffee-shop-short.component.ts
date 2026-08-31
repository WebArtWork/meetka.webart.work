import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShop } from '../coffee-shop.interface';
import { InterestShortComponent } from '../../interest/interest-short/interest-short.component';

@Component({
	selector: 'app-coffee-shop-short',
	imports: [CardModule, TagModule, DecimalPipe, InterestShortComponent],
	templateUrl: './coffee-shop-short.component.html',
	styleUrl: './coffee-shop-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeShopShortComponent {
	readonly translateService = inject(TranslateService);

	coffeeShop = input.required<CoffeeShop>();
	upcomingMeetCount = input(0);
	distanceKm = input<number | null>(null);

	open = output<void>();

	readonly hasMenu = computed(() => this.coffeeShop().menu.length > 0);

	onCardClick(): void {
		this.open.emit();
	}
}
