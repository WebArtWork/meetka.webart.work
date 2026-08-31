import { Injectable, signal } from '@angular/core';
import { BARISTA_PROFILES } from './barista.data';
import { BaristaProfile } from './barista.interface';

@Injectable({ providedIn: 'root' })
export class BaristasService {
	private readonly _baristas = signal<BaristaProfile[]>(BARISTA_PROFILES);
	readonly baristas = this._baristas.asReadonly();

	get(id: string): BaristaProfile | undefined {
		return this._baristas().find((barista) => barista.id === id);
	}

	byCoffeeShop(coffeeShopId: string): BaristaProfile[] {
		return this._baristas().filter(
			(barista) => barista.coffeeShopId === coffeeShopId,
		);
	}
}
