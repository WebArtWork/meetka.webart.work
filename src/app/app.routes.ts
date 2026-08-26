import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { meetkaRoutes } from './pages/meetka/meetka.routes';
import { meetkaSeoImage } from './pages/meetka/meetka.seo';
import { baristaRoutes } from './pages/barista/barista.routes';
import { baristaGuard } from './pages/barista/barista.guard';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'map',
		pathMatch: 'full',
	},
	{
		path: '',
		canActivate: [guestGuard],
		loadComponent: () =>
			import('./layouts/guest/guest.component').then(
				(m) => m.GuestComponent,
			),
		children: [
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Вхід',
						description: 'Увійди в Meetka, щоб створювати зустрічі та зберігати улюблені кав\'ярні.',
						image: meetkaSeoImage,
					},
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		// Barista tools, gated to the `barista` role (admins too). Registered
		// ahead of the public discovery block below so `barista/visitors`
		// doesn't get swallowed by that block's `barista/:id` profile route.
		path: 'barista',
		canActivate: [baristaGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [...baristaRoutes],
	},
	{
		// Public discovery — no auth guard, so Map/Coffee Shops/Meets stay
		// reachable without signing in. Personal actions (create/edit a meet,
		// My Meets) are still gated per-route below.
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			...meetkaRoutes,
			{
				// Unlike dashboard/profile, Settings has anonymous-friendly options
				// (theme, language, discovery radius) — no auth guard here.
				// SettingsComponent itself hides the auth-only bits (change
				// password, logout) when there's no signed-in user.
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
						description: 'Налаштування акаунта Meetka.',
						image: meetkaSeoImage,
					},
				},
				loadChildren: () =>
					import('./pages/user/settings/settings.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: '',
		canActivate: [authenticatedGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'dashboard',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Панель',
						description: 'Особиста панель користувача Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/dashboard/dashboard.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мій профіль',
						description: 'Керуй своїм профілем та інтересами в Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
		],
	},
	{
		path: 'admin',
		canActivate: [adminsGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Користувачі',
						description: 'Керування користувачами Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.usersRoutes),
			},
			{
				path: 'clients',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Клієнти',
						description: 'Керування клієнтами Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.clientsRoutes),
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Керування формами Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formsRoutes),
			},
			{
				path: 'form/:formId',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Форми',
						description: 'Керування формами Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('@wawjs/ngx-bos').then((m) => m.formRoutes),
			},
		],
	},
	{
		path: '**',
		redirectTo: 'map',
		pathMatch: 'full',
	},
];
