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
];
