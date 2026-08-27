import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/meetka/lead-form.component';

@Component({
	selector: 'app-for-coffee-shops',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-coffee-shops.component.html',
	styleUrl: './for-coffee-shops.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForCoffeeShopsPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'How much does it cost to become a partner?',
			answer: 'Phase 1 partnerships are focused on community building, not fees — reach out and we\'ll walk you through what\'s involved.',
		},
		{
			question: 'Do we need to run the meets ourselves?',
			answer: 'No — meets are created and organized by Meetka users. Your coffee shop is simply the venue and community anchor.',
		},
		{
			question: 'Can we feature our menu?',
			answer: 'Yes, your existing menu can be shown inside Meetka so visitors know what to expect before they arrive.',
		},
	];
}
