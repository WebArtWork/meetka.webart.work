import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { SelectModule } from '@wawjs/ngx-prime/select';
import { MultiSelectModule } from '@wawjs/ngx-prime/multiselect';
import { SelectButtonModule } from '@wawjs/ngx-prime/selectbutton';
import { DatePickerModule } from '@wawjs/ngx-prime/datepicker';
import { ToggleSwitchModule } from '@wawjs/ngx-prime/toggleswitch';
import { InputNumberModule } from '@wawjs/ngx-prime/inputnumber';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { TranslateService } from '@wawjs/ngx-translate';
import { CoffeeShopsService } from '../../../features/coffee-shop/coffee-shop.service';
import { MeetsService } from '../../../features/meet/meet.service';
import { INTERESTS } from '../../../features/interest/interest.data';
import { MEET_MUTATE_WEEKDAYS } from './meet-mutate.const';
import { MeetMutateModel, NEW_MEET_MUTATE_MODEL } from './meet-mutate.interface';

@Component({
	selector: 'app-meet-mutate',
	imports: [
		FormsModule,
		InputTextModule,
		TextareaModule,
		SelectModule,
		MultiSelectModule,
		SelectButtonModule,
		DatePickerModule,
		ToggleSwitchModule,
		InputNumberModule,
		ButtonModule,
	],
	templateUrl: './meet-mutate.component.html',
	styleUrl: './meet-mutate.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeetMutateComponent {
	private readonly _router = inject(Router);
	private readonly _route = inject(ActivatedRoute);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _meetsService = inject(MeetsService);
	private readonly _userService = inject(UserService);
	private readonly _messageService = inject(MessageService);
	readonly translateService = inject(TranslateService);

	readonly interests = INTERESTS;
	readonly coffeeShops = this._coffeeShopsService.shops;
	readonly weekdays = MEET_MUTATE_WEEKDAYS;
	readonly visibilityOptions = [
		{ label: 'Public', value: 'public' as const },
		{ label: 'Private', value: 'private' as const },
	];
	readonly recurrenceTypeOptions = [
		{ label: 'Weekly', value: 'weekly' as const },
		{ label: 'Every two weeks', value: 'biweekly' as const },
		{ label: 'Monthly', value: 'monthly' as const },
	];

	private readonly _editingId = this._route.snapshot.queryParamMap.get('id');
	readonly isEditMode = !!this._editingId;

	readonly model = signal<MeetMutateModel>(this._initialModel());

	readonly isSaveDisabled = computed(() => {
		const model = this.model();
		return !model.title.trim() || !model.coffeeShopId || !model.date;
	});

	private _initialModel(): MeetMutateModel {
		if (this._editingId) {
			const meet = this._meetsService.get(this._editingId);
			if (meet) {
				return {
					title: meet.title,
					description: meet.description,
					interestIds: meet.interestIds,
					coffeeShopId: meet.coffeeShopId,
					visibility: meet.visibility,
					date: new Date(meet.date),
					startTime: meet.startTime,
					endTime: meet.endTime,
					recurringEnabled: !!meet.recurring,
					recurrenceType: meet.recurring?.type ?? 'weekly',
					recurrenceDays: meet.recurring?.days ?? [],
					participantLimitEnabled: meet.participantLimit != null,
					participantLimit: meet.participantLimit ?? 10,
				};
			}
		}

		const presetCoffeeShopId = this._route.snapshot.queryParamMap.get('coffeeShop');
		return { ...NEW_MEET_MUTATE_MODEL, coffeeShopId: presetCoffeeShopId ?? '' };
	}

	updateModel<K extends keyof MeetMutateModel>(key: K, value: MeetMutateModel[K]): void {
		this.model.update((current) => ({ ...current, [key]: value }));
	}

	save(): void {
		const model = this.model();
		if (this.isSaveDisabled() || !model.date) return;

		const user = this._userService.user();
		if (!user?._id) {
			this._router.navigate(['/sign'], { queryParams: { returnUrl: '/meet/mutate' } });
			return;
		}

		const draft = {
			title: model.title.trim(),
			description: model.description.trim(),
			interestIds: model.interestIds,
			coffeeShopId: model.coffeeShopId,
			visibility: model.visibility,
			date: model.date.toISOString().slice(0, 10),
			startTime: model.startTime,
			endTime: model.endTime,
			participantLimit: model.participantLimitEnabled ? model.participantLimit : null,
			recurring: model.recurringEnabled
				? { type: model.recurrenceType, days: model.recurrenceDays }
				: null,
		};

		if (this.isEditMode && this._editingId) {
			this._meetsService.update(this._editingId, draft);
			this._messageService.add({ severity: 'success', detail: this.translateService.translate('Meet updated')() });
			this._router.navigate(['/meet'], { queryParams: { id: this._editingId } });
			return;
		}

		const created = this._meetsService.create(draft, user._id, user.name ?? '', user.thumb ?? 'default.png');
		this._messageService.add({ severity: 'success', detail: this.translateService.translate('Meet created')() });
		this._router.navigate(['/meet'], { queryParams: { id: created.id } });
	}

	deleteMeet(): void {
		if (!this._editingId) return;
		this._meetsService.cancel(this._editingId);
		this._messageService.add({ severity: 'info', detail: this.translateService.translate('Meet cancelled')() });
		this._router.navigate(['/my-meets']);
	}

	cancel(): void {
		if (this.isEditMode && this._editingId) {
			this._router.navigate(['/meet'], { queryParams: { id: this._editingId } });
			return;
		}
		this._router.navigate(['/meets']);
	}
}
