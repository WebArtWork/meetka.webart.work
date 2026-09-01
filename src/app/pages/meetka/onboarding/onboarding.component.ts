import {
	afterNextRender,
	ChangeDetectionStrategy,
	Component,
	computed,
	ElementRef,
	inject,
	signal,
	viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from '@wawjs/ngx-prime/api';
import { AvatarModule } from '@wawjs/ngx-prime/avatar';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { TranslateService } from '@wawjs/ngx-translate';
import { InterestsFilterComponent } from '../../../components/interests-filter/interests-filter.component';
import { VisitorsService } from '../../../features/visitor/visitor.service';

@Component({
	selector: 'app-onboarding',
	imports: [
		FormsModule,
		AvatarModule,
		ButtonModule,
		InputTextModule,
		TextareaModule,
		InterestsFilterComponent,
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
	private readonly _nameInput =
		viewChild<ElementRef<HTMLInputElement>>('nameInput');

	readonly name = signal('');
	readonly bio = signal('');
	readonly photo = signal<string | null>(null);
	readonly interestIds = signal<string[]>([]);
	readonly isSubmitting = signal(false);
	readonly nameTouched = signal(false);

	readonly nameInvalid = computed(() => !this.name().trim());

	constructor() {
		afterNextRender(() => this._nameInput()?.nativeElement.focus());
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
		this.nameTouched.set(true);
		if (this.nameInvalid() || this.isSubmitting()) return;

		this.isSubmitting.set(true);

		const visitor = this._visitorsService.add({
			name: this.name().trim(),
			bio: this.bio().trim(),
			photo: this.photo() ?? '',
			interestIds: this.interestIds(),
			socialLinks: [],
		});

		this._messageService.add({
			severity: 'success',
			detail: this.translateService.translate('Welcome to Meetka!')(),
		});

		this._router.navigate(['/visitor'], { queryParams: { id: visitor.id } });
	}
}
