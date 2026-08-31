import { Injectable, signal } from '@angular/core';
import { COFFEE_SHOPS } from './coffee-shop.data';
import { CoffeeShop } from './coffee-shop.interface';

@Injectable({ providedIn: 'root' })
export class CoffeeShopsService {
	private readonly _shops = signal<CoffeeShop[]>(COFFEE_SHOPS);
	readonly shops = this._shops.asReadonly();

	get(id: string): CoffeeShop | undefined {
		return this._shops().find((shop) => shop.id === id);
	}

	getBySlug(slug: string): CoffeeShop | undefined {
		return this._shops().find((shop) => shop.slug === slug);
	}

	byInterests(interestIds: string[]): CoffeeShop[] {
		if (!interestIds.length) return this._shops();
		return this._shops().filter((shop) =>
			shop.interestIds.some((id) => interestIds.includes(id)),
		);
	}
}
