import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { ChipModule } from '@wawjs/ngx-prime/chip';
import { TranslateService } from '@wawjs/ngx-translate';
import { interestsByIds } from '../../meetka/meetka.interests';

@Component({
	selector: 'app-interest-chips',
	imports: [ChipModule],
	template: `
		@for (interest of interests(); track interest.id) {
			<p-chip [label]="translateService.translate(interest.label)()" [icon]="'pi pi-' + interest.icon" styleClass="app-interest-chip" />
		}
	`,
	styles: `
		:host {
			display: flex;
			flex-wrap: wrap;
			gap: 0.375rem;
		}
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterestChipsComponent {
	readonly translateService = inject(TranslateService);

	interestIds = input<string[]>([]);

	readonly interests = computed(() => interestsByIds(this.interestIds()));
}
