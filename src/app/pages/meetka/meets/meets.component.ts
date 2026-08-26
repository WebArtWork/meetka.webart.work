import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MeetsListComponent } from '../../../shared/meetka/meets-list.component';

@Component({
	selector: 'app-meets',
	imports: [MeetsListComponent],
	templateUrl: './meets.component.html',
	styleUrl: './meets.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetsPageComponent {
	private readonly _route = inject(ActivatedRoute);

	readonly initialCoffeeShopId = signal(
		this._route.snapshot.queryParamMap.get('coffeeShop'),
	);
	readonly todayOnly = signal(!!this._route.snapshot.data['todayOnly']);
}
