import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { AccordionModule } from '@wawjs/ngx-prime/accordion';
import { TranslateService } from '@wawjs/ngx-translate';
import { BaristasService } from '../../../meetka/baristas.service';
import { LeadFormComponent } from '../../../shared/meetka/lead-form.component';

@Component({
	selector: 'app-for-baristas',
	imports: [RouterLink, ButtonModule, AccordionModule, LeadFormComponent],
	templateUrl: './for-baristas.component.html',
	styleUrl: './for-baristas.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForBaristasPageComponent {
	private readonly _baristasService = inject(BaristasService);
	readonly translateService = inject(TranslateService);

	readonly exampleBarista = this._baristasService.baristas()[0];

	readonly showForm = signal(false);

	readonly faq = [
		{
			question: 'Do I have to become a matchmaker?',
			answer: 'No — Meetka does not require you to introduce strangers or manage anything. It stays optional and lightweight.',
		},
		{
			question: 'What does "Magic Coffee" mean?',
			answer: 'It\'s a light, real-life introduction concept for private meets — you help two people recognize each other, nothing more structured than that.',
		},
		{
			question: 'Will this add to my workload?',
			answer: 'Meetka is designed so your normal barista work continues unchanged — Meetka just gives your regulars a reason to come back.',
		},
	];
}
