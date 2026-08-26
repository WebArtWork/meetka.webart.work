import {
	ChangeDetectionStrategy,
	Component,
	ElementRef,
	inject,
	signal,
	viewChild,
} from '@angular/core';
import {
	Field,
	FormField,
	form,
	required,
	schema,
	submit,
} from '@angular/forms/signals';
import { Router } from '@angular/router';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateService } from '@wawjs/ngx-translate';
import { InterestsFilterComponent } from '../../../components/interests-filter/interests-filter.component';
import { FieldErrorComponent } from '../../../shared/field-error/field-error.component';
import { VisitorsService } from '../../../meetka/visitors.service';

interface OnboardingModel {
	name: string;
	bio: string;
}

const onboardingSchema = schema<OnboardingModel>((path) => {
	required(path.name, { message: "Введіть ім'я..." });
});

@Component({
	selector: 'app-onboarding',
	imports: [
		FormField,
		ButtonModule,
		InputTextModule,
		TextareaModule,
		InterestsFilterComponent,
		FieldErrorComponent,
	],
	templateUrl: './onboarding.component.html',
	styleUrl: './onboarding.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnboardingPageComponent {
	private readonly _router = inject(Router);
	private readonly _visitorsService = inject(VisitorsService);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	private readonly _fileInput =
		viewChild<ElementRef<HTMLInputElement>>('fileInput');

	readonly model = signal<OnboardingModel>({ name: '', bio: '' });
	readonly form = form(this.model, onboardingSchema);

	readonly photo = signal<string | null>(null);
	readonly interestIds = signal<string[]>([]);
	readonly isSubmitting = signal(false);

	get nameField(): Field<string> {
		return this.form.name;
	}

	get bioField(): Field<string> {
		return this.form.bio;
	}

	openPhotoPicker(): void {
		this._fileInput()?.nativeElement.click();
	}

	onPhotoSelected(event: Event): void {
		const input = event.target as HTMLInputElement;
		const file = input.files?.[0];
		if (!file) return;

		const reader = new FileReader();
		reader.onload = () => this.photo.set(reader.result as string);
		reader.readAsDataURL(file);
	}

	wFormSubmit(): void {
		submit(this.form, (formTree) => {
			const value = formTree().value() as OnboardingModel;

			this.isSubmitting.set(true);

			const visitor = this._visitorsService.add({
				name: value.name,
				bio: value.bio,
				photo: this.photo() ?? '',
				interestIds: this.interestIds(),
				socialLinks: [],
			});

			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate(
					'Новий учасник доданий',
				)(),
			});

			this._router.navigate(['/visitor', visitor.id]);

			return Promise.resolve({} as any);
		});
	}
}
