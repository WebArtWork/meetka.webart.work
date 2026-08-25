import {
	Component,
	computed,
	inject,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormField, form, submit } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileComponent } from '@wawjs/ngx-bos';
import { UserService } from '@wawjs/ngx-bos';
import { EmitterService } from '@wawjs/ngx-core';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { TranslateDirective, TranslateService } from '@wawjs/ngx-translate';
import { MeetkaProfileService } from '../../../meetka/meetka-profile.service';
import { MeetsService } from '../../../meetka/meets.service';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { INTERESTS } from '../../../meetka/meetka.interests';
import { MeetCardComponent } from '../../../shared/meetka/meet-card.component';
import { ProfileModel } from './profile.interface';
import { profileSchema } from './profile.schema';

@Component({
	imports: [
		RouterLink,
		FormsModule,
		FormField,
		ButtonModule,
		InputTextModule,
		TextareaModule,
		InputNumberModule,
		SelectButtonModule,
		MultiSelectModule,
		FileComponent,
		TranslateDirective,
		MeetCardComponent,
	],
	templateUrl: './profile.component.html',
	styleUrl: './profile.component.scss',
})
export class ProfileComponent {
	readonly userService = inject(UserService);
	readonly translateService = inject(TranslateService);
	readonly meetkaProfileService = inject(MeetkaProfileService);
	private readonly _emitterService = inject(EmitterService);
	private readonly _router = inject(Router);
	private readonly _meetsService = inject(MeetsService);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);

	readonly interests = INTERESTS;
	readonly genderOptions = [
		{ label: 'Female', value: 'female' as const },
		{ label: 'Male', value: 'male' as const },
		{ label: 'Other', value: 'other' as const },
	];

	private readonly _currentUserId = computed(() => this.userService.user()?._id ?? '');

	readonly upcomingMeets = computed(() => {
		const userId = this._currentUserId();
		const today = new Date().toISOString().slice(0, 10);
		return this._meetsService
			.meets()
			.filter(
				(meet) =>
					meet.active &&
					meet.date >= today &&
					meet.participants.some((p) => p.userId === userId && p.going),
			)
			.sort((a, b) => a.date.localeCompare(b.date))
			.slice(0, 3);
	});

	readonly createdMeets = computed(() => {
		const userId = this._currentUserId();
		return this._meetsService
			.meets()
			.filter((meet) => meet.active && meet.organizerId === userId)
			.slice(0, 3);
	});

	private readonly _initialProfile = computed<ProfileModel>(() => {
		const u = this.userService.user();
		return {
			name: u.name || '',
			phone: u.phone || '',
			bio: u.bio || '',
		};
	});

	readonly profileModel = signal<ProfileModel>(this._initialProfile());
	readonly profileForm = form(this.profileModel, profileSchema);
	readonly isSubmitDisabled = computed(() => this.profileForm().invalid());

	constructor() {
		this._emitterService
			.onComplete('us.user')
			.pipe(takeUntilDestroyed())
			.subscribe(() => {
				this.profileModel.set(this._initialProfile());
				this.profileForm().reset();
			});
	}

	wFormSubmit(): void {
		submit(this.profileForm, (formTree) => {
			this.userService.user.set({
				...this.userService.user(),
				...(formTree().value() as ProfileModel),
			});

			this.userService.updateMe();
			return Promise.resolve();
		});
	}

	updateThumb(thumb: string): void {
		this.userService.user.set({
			...this.userService.user(),
			thumb,
		});

		this.userService.updateMe();
	}

	coffeeShopName(coffeeShopId: string): string {
		return this._coffeeShopsService.get(coffeeShopId)?.name ?? '';
	}

	openMeet(id: string): void {
		this._router.navigate(['/meet', id]);
	}

	updateAge(age: number | null): void {
		this.meetkaProfileService.update({ ...this.meetkaProfileService.extras(), age });
	}

	updateGender(gender: 'female' | 'male' | 'other' | ''): void {
		this.meetkaProfileService.update({ ...this.meetkaProfileService.extras(), gender });
	}

	updateInterestIds(interestIds: string[]): void {
		this.meetkaProfileService.update({ ...this.meetkaProfileService.extras(), interestIds });
	}
}
