import { ChangeDetectionStrategy, Component, inject, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { TranslateService } from '@wawjs/ngx-translate';
import { INTERESTS } from '../../meetka/meetka.interests';

/**
 * Global filter control for picking Meetka interests, backed by a
 * PrimeNG multiselect. Reused across pages that filter by interest
 * (map, coffee shops, ...).
 */
@Component({
	selector: 'app-interests-filter',
	imports: [FormsModule, MultiSelectModule],
	template: `
		<p-multiSelect
			[options]="interests"
			optionLabel="label"
			optionValue="id"
			[placeholder]="translateService.translate('Interests')()"
			[ngModel]="selectedInterestIds()"
			(ngModelChange)="selectedInterestIds.set($event)"
			appendTo="body"
			[styleClass]="styleClass()"
		/>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestsFilterComponent {
	readonly translateService = inject(TranslateService);

	readonly interests = INTERESTS;

	readonly styleClass = input('');
	readonly selectedInterestIds = model<string[]>([]);
}
