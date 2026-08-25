import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { authenticatedGuard } from '@wawjs/ngx-bos';

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
	{
		path: 'meets',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Зустрічі' } },
		loadComponent: () =>
			import('./meets/meets.component').then((m) => m.MeetsPageComponent),
	},
	{
		path: 'meet/:id',
		canActivate: [MetaGuard],
		data: { meta: { title: 'Зустріч' } },
		loadComponent: () =>
			import('./meet/meet.component').then((m) => m.MeetPageComponent),
	},
	{
		path: 'my-meets',
		canActivate: [MetaGuard, authenticatedGuard],
		data: { meta: { title: 'Мої зустрічі' } },
		loadComponent: () =>
			import('./my-meets/my-meets.component').then(
				(m) => m.MyMeetsPageComponent,
			),
	},
];
