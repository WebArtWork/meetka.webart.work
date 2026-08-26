import { Routes } from '@angular/router';
import { MetaGuard } from '@wawjs/ngx-core';
import { meetkaSeoImage } from '../meetka/meetka.seo';

export const baristaRoutes: Routes = [
	{
		path: 'visitors',
		canActivate: [MetaGuard],
		data: {
			meta: {
				title: 'Відвідувачі',
				description: 'Список відвідувачів бариста: імʼя та нотатка.',
				image: meetkaSeoImage,
				index: false,
			},
		},
		loadComponent: () =>
			import('./visitors/visitors.component').then(
				(m) => m.BaristaVisitorsPageComponent,
			),
	},
];
