import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { meetkaRoutes } from './pages/meetka/meetka.routes';

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
					},
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.routes').then(
						(m) => m.routes,
					),
			},
			{
				path: 'settings',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Мої налаштування',
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
