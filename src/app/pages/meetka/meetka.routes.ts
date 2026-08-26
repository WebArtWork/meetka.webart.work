import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { authenticatedGuard } from '@wawjs/ngx-bos';
import { meetkaSeoImage } from './meetka.seo';

export const meetkaRoutes: Routes = [
	{
		path: 'map',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Мапа',
				description: 'Знаходь кав\'ярні та зустрічі поруч на інтерактивній мапі Meetka.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./map/map.component').then((m) => m.MapPageComponent),
	},
	{
		path: 'coffee-shops',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Кавʼярні',
				description: 'Перелік кав\'ярень-партнерів Meetka: адреси, меню та найближчі зустрічі.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./coffee-shops/coffee-shops.component').then(
				(m) => m.CoffeeShopsPageComponent,
			),
	},
	{
		// Title/description/image are overridden per shop by CoffeeShopPageComponent via MetaService.applyMeta().
		path: 'coffee-shop/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Кавʼярня',
				description: 'Деталі кав\'ярні: адреса, графік роботи, меню та бариста.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./coffee-shop/coffee-shop.component').then(
				(m) => m.CoffeeShopPageComponent,
			),
	},
	{
		path: 'meets',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Зустрічі',
				description: 'Публічні зустрічі за інтересами у кав\'ярнях-партнерах Meetka.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./meets/meets.component').then((m) => m.MeetsPageComponent),
	},
	{
		path: 'meet/mutate',
		canActivate: [MetaGuard, authenticatedGuard],
		data: {
			meta: {
				title: 'Зустріч',
				description: 'Створи або зміни зустріч у Meetka.',
				image: meetkaSeoImage,
				index: false,
			},
		},
		loadComponent: () =>
			import('./meet-mutate/meet-mutate.component').then(
				(m) => m.MeetMutateComponent,
			),
	},
	{
		// Title/description/image are overridden per meet by MeetPageComponent via MetaService.applyMeta().
		path: 'meet/:id',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Зустріч',
				description: 'Деталі зустрічі: час, місце та учасники.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./meet/meet.component').then((m) => m.MeetPageComponent),
	},
	{
		// Title/description/image are overridden per coffee shop by MenuPageComponent via MetaService.applyMeta().
		path: 'menu/:coffeeShopId',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Меню',
				description: 'Меню кав\'ярні: напої, десерти та ціни.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./menu/menu.component').then((m) => m.MenuPageComponent),
	},
	{
		path: 'my-meets',
		canActivate: [MetaGuard, authenticatedGuard],
		data: {
			meta: {
				title: 'Мої зустрічі',
				description: 'Зустрічі, які ти організував(-ла) або на які записаний(-а).',
				image: meetkaSeoImage,
				index: false,
			},
		},
		loadComponent: () =>
			import('./my-meets/my-meets.component').then(
				(m) => m.MyMeetsPageComponent,
			),
	},
	{
		path: 'for-coffee-shops',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Для кавʼярень',
				description: 'Приєднай свою кав\'ярню до Meetka та приваблюй нових відвідувачів.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-coffee-shops/for-coffee-shops.component').then(
				(m) => m.ForCoffeeShopsPageComponent,
			),
	},
	{
		path: 'for-baristas',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Для баристів',
				description: 'Стань бариста Meetka: знайомся з відвідувачами та веди свої зустрічі.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./for-baristas/for-baristas.component').then(
				(m) => m.ForBaristasPageComponent,
			),
	},
	{
		// Title/description/image are overridden per barista by ProfilePageComponent via MetaService.applyMeta().
		path: 'barista/:id',
		canActivate: [MetaGuard],
		data: {
			profileKind: 'barista',
			meta: {
				title: 'Бариста',
				description: 'Профіль бариста Meetka: інтереси та зустрічі.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./profile-page/profile-page.component').then(
				(m) => m.ProfilePageComponent,
			),
	},
	{
		// Title/description/image are overridden per visitor by ProfilePageComponent via MetaService.applyMeta().
		path: 'visitor/:id',
		canActivate: [MetaGuard],
		data: {
			profileKind: 'visitor',
			meta: {
				title: 'Відвідувач',
				description: 'Профіль відвідувача Meetka: інтереси та зустрічі.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./profile-page/profile-page.component').then(
				(m) => m.ProfilePageComponent,
			),
	},
	{
		path: 'share',
		canActivate: [MetaGuard],
		data: {
			shareKind: 'app',
			meta: {
				title: 'Поділитися Meetka',
				description: 'Заскануй QR-код, щоб приєднатися до Meetka за кілька секунд.',
				image: meetkaSeoImage,
			},
		},
		loadComponent: () =>
			import('./share/share.component').then((m) => m.SharePageComponent),
	},
	{
		path: 'share-profile',
		canActivate: [MetaGuard, authenticatedGuard],
		data: {
			shareKind: 'profile',
			meta: {
				title: 'Поділитися профілем',
				description: 'Заскануй QR-код, щоб відкрити мій профіль Meetka.',
				image: meetkaSeoImage,
				index: false,
			},
		},
		loadComponent: () =>
			import('./share/share.component').then((m) => m.SharePageComponent),
	},
];
