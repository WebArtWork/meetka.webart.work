import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShop } from '../../meetka/meetka.models';
import { InterestChipsComponent } from './interest-chips.component';

@Component({
	selector: 'app-coffee-shop-card',
	imports: [CardModule, TagModule, DecimalPipe, InterestChipsComponent],
	templateUrl: './coffee-shop-card.component.html',
	styleUrl: './coffee-shop-card.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoffeeShopCardComponent {
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
