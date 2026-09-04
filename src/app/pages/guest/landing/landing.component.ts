import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateDirective } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	imports: [RouterLink, ButtonModule, TranslateDirective],
})
export class LandingComponent {
	readonly roleLinks: { path: string; label: string }[] = [
		{ path: '/for-users', label: 'Користувач' },
		{ path: '/for-baristas', label: 'Бариста' },
		{ path: '/for-coffee-shops', label: "Кав'ярня" },
	];
}
