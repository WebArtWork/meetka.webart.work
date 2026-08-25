import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslateService } from '@wawjs/ngx-translate';
import { MeetsListComponent } from '../../../shared/meetka/meets-list.component';

@Component({
	selector: 'app-my-meets',
	imports: [MeetsListComponent],
	templateUrl: './my-meets.component.html',
	styleUrl: './my-meets.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyMeetsPageComponent {
	readonly translateService = inject(TranslateService);
}
