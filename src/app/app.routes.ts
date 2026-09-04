import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { adminsGuard, authenticatedGuard, guestGuard } from '@wawjs/ngx-bos';
import { meetkaRoutes } from './pages/meetka/meetka.routes';
import { meetkaSeoImage } from './pages/meetka/meetka.seo';
import { baristaRoutes } from './pages/barista/barista.routes';
import { baristaGuard } from './pages/barista/barista.guard';

export const routes: Routes = [
	{
		// Marketing landing for anonymous visitors only — guestGuard redirects
		// an already-signed-in user to their profile, so this never shadows
		// the feed for returning users. Registered first so it wins the root
		// path before the public-discovery block below.
		path: '',
		canActivate: [guestGuard],
		loadComponent: () =>
			import('./layouts/guest/guest.component').then(
				(m) => m.GuestComponent,
			),
		children: [
			{
				path: '',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Meetka',
						description:
							"Знаходь публічні зустрічі за інтересами у кав'ярнях поруч, приєднуйся або створюй свою.",
						image: meetkaSeoImage,
					},
				},
				loadComponent: () =>
					import('./pages/guest/landing/landing.component').then(
						(m) => m.LandingComponent,
					),
			},
		],
	},
	{
		// Public discovery — reachable without signing in for anyone who
		// navigates here directly (e.g. /map, /coffee-shops). Personal
		// actions (create/edit a meet, My Meets) are still gated per-route
		// below. NOTE: the root path '' is now claimed by the guestGuard
		// landing block above for anonymous visitors; a signed-in user
		// hitting '/' is redirected by guestGuard to config.profilePath
		// instead of reaching the feed here — this is an intentional,
		// user-approved change from the previous behavior (feed as home for
		// everyone).
		path: '',
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [
			...meetkaRoutes,
			{
				path: 'feedback',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Відгук',
						description: 'Поділись відгуком або повідом про помилку в Meetka.',
						image: meetkaSeoImage,
						index: false,
					},
				},
				loadChildren: () =>
					import('./pages/user/feedback/feedback.routes').then(
						(m) => m.routes,
					),
			},
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
		// Barista tools, gated to the `barista` role (admins too).
		path: 'barista',
		canActivate: [baristaGuard],
		loadComponent: () =>
			import('./layouts/user/user.component').then(
				(m) => m.UserComponent,
			),
		children: [...baristaRoutes],
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
