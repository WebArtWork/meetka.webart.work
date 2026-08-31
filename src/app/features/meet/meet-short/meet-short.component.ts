import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { CardModule } from '@wawjs/ngx-prime/card';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { Meet } from '../meet.interface';
import { InterestShortComponent } from '../../interest/interest-short/interest-short.component';

@Component({
	selector: 'app-meet-short',
	imports: [CardModule, TagModule, ButtonModule, DecimalPipe, InterestShortComponent],
	templateUrl: './meet-short.component.html',
	styleUrl: './meet-short.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetShortComponent {
	readonly translateService = inject(TranslateService);

	meet = input.required<Meet>();
	coffeeShopName = input('');
	currentUserId = input<string | null>(null);
	distanceKm = input<number | null>(null);

	open = output<void>();
	goingToggle = output<boolean>();

	readonly isGoing = computed(() => {
		const userId = this.currentUserId();
		if (!userId) return false;
		return this.meet().participants.some((p) => p.userId === userId && p.going);
	});

	readonly participantCount = computed(
		() => this.meet().participants.filter((p) => p.going).length,
	);

	readonly isFull = computed(() => {
		const limit = this.meet().participantLimit;
		return limit != null && this.participantCount() >= limit;
	});

	onCardClick(): void {
		this.open.emit();
	}

	onGoingClick(event: Event): void {
		event.stopPropagation();
		this.goingToggle.emit(!this.isGoing());
	}
}
