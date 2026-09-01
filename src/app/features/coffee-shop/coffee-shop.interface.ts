import { GeoPoint } from '../../shared/geo/geo.interface';

export interface MenuProductOption {
	label: string;
	price: number;
}

export interface MenuProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	options?: MenuProductOption[];
	available: boolean;
}

export interface MenuCategory {
	id: string;
	name: string;
	products: MenuProduct[];
}

export interface CoffeeShop {
	id: string;
	/** URL-friendly identifier used in `/coffee-shop/:coffeeShopSlug` and `/menu/:coffeeShopSlug`. */
	slug: string;
	name: string;
	photos: string[];
	address: string;
	location: GeoPoint;
	workingHours: string;
	phone: string;
	description: string;
	interestIds: string[];
	menu: MenuCategory[];
	baristaIds: string[];
}
