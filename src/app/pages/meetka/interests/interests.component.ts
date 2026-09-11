import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { INTERESTS } from '../../../features/interest/interest.data';

@Component({
	selector: 'app-interests',
	imports: [RouterLink, ButtonModule],
	templateUrl: './interests.component.html',
	styleUrl: './interests.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly interests = INTERESTS;
}
