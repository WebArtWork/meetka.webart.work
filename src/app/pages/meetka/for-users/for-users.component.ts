import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { LeadFormComponent } from '../../../shared/meetka/lead-form.component';

@Component({
	selector: 'app-for-users',
	imports: [ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-users.component.html',
	styleUrl: './for-users.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForUsersPageComponent {
	readonly translateService = inject(TranslateService);

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Is using Meetka free?',
			answer: 'Yes — discovering coffee shops, creating meets, and joining meets on Meetka is free.',
		},
		{
			question: 'How do I create my own meet?',
			answer: 'Pick a coffee shop from the map or the feed, set a time and topic, and your meet appears in the public meets list for others to join.',
		},
		{
			question: 'Do other users see my profile and meet history?',
			answer: 'Participants of a meet see your public profile with your interests — your full meet history stays yours to share or keep private.',
		},
	];
}
