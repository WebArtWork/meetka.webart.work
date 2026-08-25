export interface MeetMutateModel {
	title: string;
	description: string;
	interestIds: string[];
	coffeeShopId: string;
	visibility: 'public' | 'private';
	date: Date | null;
	startTime: string;
	endTime: string;
	recurringEnabled: boolean;
	recurrenceType: 'weekly' | 'biweekly' | 'monthly';
	recurrenceDays: number[];
	participantLimitEnabled: boolean;
	participantLimit: number;
}

export const NEW_MEET_MUTATE_MODEL: MeetMutateModel = {
	title: '',
	description: '',
	interestIds: [],
	coffeeShopId: '',
	visibility: 'public',
	date: null,
	startTime: '18:00',
	endTime: '19:00',
	recurringEnabled: false,
	recurrenceType: 'weekly',
	recurrenceDays: [],
	participantLimitEnabled: false,
	participantLimit: 10,
};
