import {
	ChangeDetectionStrategy,
	Component,
	computed,
	inject,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { MessageService } from '@wawjs/ngx-prime/api';
import { UserService } from '@wawjs/ngx-bos';
import { TranslateService } from '@wawjs/ngx-translate';
import { QrCodeComponent } from '../../../shared/meetka/qr-code.component';
import { companyProfile } from '../../../company/company.data';

export type ShareKind = 'app' | 'profile';

@Component({
	selector: 'app-share',
	imports: [ButtonModule, QrCodeComponent, RouterLink],
	templateUrl: './share.component.html',
	styleUrl: './share.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SharePageComponent {
	private readonly _messageService = inject(MessageService);
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _userService = inject(UserService);
	readonly translateService = inject(TranslateService);

	readonly kind = toSignal(
		this._activatedRoute.data.pipe(
			map((data) => (data['shareKind'] as ShareKind) ?? 'app'),
		),
		{
			initialValue:
				(this._activatedRoute.snapshot.data[
					'shareKind'
				] as ShareKind) ?? 'app',
		},
	);

	readonly shareUrl = computed(() => {
		if (this.kind() === 'profile') {
			return `${companyProfile.siteUrl}/visitor/${this._userService.user()._id}`;
		}
		return `${companyProfile.siteUrl}/onboarding`;
	});

	readonly title = computed(() =>
		this.kind() === 'profile'
			? this.translateService.translate('Share My Profile')()
			: this.translateService.translate('Share Meetka')(),
	);

	readonly description = computed(() =>
		this.kind() === 'profile'
			? this.translateService.translate(
					'Let people scan this code to open my Meetka profile.',
				)()
			: this.translateService.translate(
					"Scan this code to join Meetka in seconds — no app to install, just sign up and you're in.",
				)(),
	);

	copyLink(): void {
		navigator.clipboard?.writeText(this.shareUrl()).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate(
					'Link copied to clipboard',
				)(),
			});
		});
	}
}
