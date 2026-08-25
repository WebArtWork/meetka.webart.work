import {
	Component,
	DestroyRef,
	computed,
	inject,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormField, form, submit } from '@angular/forms/signals';
import { FormsModule } from '@angular/forms';
import { UserService } from '@wawjs/ngx-bos';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { PasswordModule } from '@wawjs/ngx-prime/password';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';
import {
	LanguageService,
	TranslateDirective,
	TranslateService,
} from '@wawjs/ngx-translate';
import { FieldErrorComponent } from '../../../shared/field-error/field-error.component';
import { ThemeState } from '../../../theme/theme-state';
import { GeoService } from '../../../meetka/geo.service';
import { SecurityModel } from './settings.interface';
import { securitySchema } from './settings.schema';

const DISCOVERY_RADIUS_OPTIONS = [5, 10, 20, 50];

@Component({
	imports: [FormsModule, FormField, ButtonModule, PasswordModule, ToggleSwitchModule, FieldErrorComponent, TranslateDirective],
	templateUrl: './settings.component.html',
	styleUrl: './settings.component.scss',
})
export class SettingsComponent {
	readonly userService = inject(UserService);
	readonly languageService = inject(LanguageService);
	readonly translateService = inject(TranslateService);
	readonly themeService = inject(ThemeState);
	readonly geoService = inject(GeoService);
	private readonly _destroyRef = inject(DestroyRef);

	readonly discoveryRadiusOptions = DISCOVERY_RADIUS_OPTIONS;
	readonly notificationsEnabled = signal(false);

	setDiscoveryRadius(radiusKm: number): void {
		this.geoService.setDiscoveryRadiusKm(radiusKm);
	}

	readonly languageName = computed(() => {
		const language = this.languageService.getLanguage(this.languageService.language());

		return language?.name ?? '';
	});
	private static readonly LANGUAGE_FLAG_EMOJI: Record<string, string> = {
		cs: '🇨🇿',
		de: '🇩🇪',
		el: '🇬🇷',
		en: '🇬🇧',
		es: '🇪🇸',
		fr: '🇫🇷',
		hu: '🇭🇺',
		it: '🇮🇹',
		nl: '🇳🇱',
		pl: '🇵🇱',
		pt: '🇵🇹',
		ro: '🇷🇴',
		sv: '🇸🇪',
		ua: '🇺🇦',
		uk: '🇺🇦',
	};

	readonly languageFlagEmoji = computed(
		() => SettingsComponent.LANGUAGE_FLAG_EMOJI[this.languageService.language()] ?? '🌐',
	);

	readonly securityModel = signal<SecurityModel>({
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
	});

	readonly securityForm = form(this.securityModel, securitySchema);

	readonly isSecurityDisabled = computed(() => {
		const m = this.securityModel();
		return (
			this.securityForm().invalid() || m.newPassword !== m.confirmPassword
		);
	});

	wSecuritySubmit(): void {
		submit(this.securityForm, (formTree) => {
			const payload = formTree().value() as SecurityModel;

			this.userService
				.changePassword(payload.currentPassword, payload.newPassword)
				.pipe(takeUntilDestroyed(this._destroyRef))
				.subscribe({
					next: () => {
						this.securityForm().reset();
						this.securityModel.set({
							currentPassword: '',
							newPassword: '',
							confirmPassword: '',
						});
					},
				});

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

	nextLanguage(): void {
		const languages = this.languageService.languages();
		if (!languages.length) return;

		const currentIndex = languages.findIndex(
			language => language.code === this.languageService.language(),
		);
		const nextIndex =
			currentIndex >= 0 && currentIndex < languages.length - 1 ? currentIndex + 1 : 0;

		void this.translateService.setLanguage(languages[nextIndex].code);
	}
}
