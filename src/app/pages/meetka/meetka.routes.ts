import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';

export const meetkaRoutes: Routes = [
	{
		path: 'map',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Мапа' } },
		loadComponent: () =>
			import('./map/map.component').then((m) => m.MapPageComponent),
	},
	{
		path: 'coffee-shops',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Кавʼярні' } },
		loadComponent: () =>
			import('./coffee-shops/coffee-shops.component').then(
				(m) => m.CoffeeShopsPageComponent,
			),
	},
	{
		path: 'coffee-shop/:id',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Кавʼярня' } },
		loadComponent: () =>
			import('./coffee-shop/coffee-shop.component').then(
				(m) => m.CoffeeShopPageComponent,
			),
	},
];
