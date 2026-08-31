export type RecurrenceType = 'weekly' | 'biweekly' | 'monthly';

export interface MeetRecurrence {
	type: RecurrenceType;
	days: number[];
	endDate?: string;
}

export interface MeetParticipant {
	userId: string;
	name: string;
	thumb: string;
	going: boolean;
}

export interface Meet {
	id: string;
	title: string;
	description: string;
	interestIds: string[];
	coffeeShopId: string;
	date: string;
	startTime: string;
	endTime: string;
	visibility: 'public' | 'private';
	organizerId: string;
	organizerName: string;
	organizerThumb: string;
	participantLimit: number | null;
	participants: MeetParticipant[];
	recurring: MeetRecurrence | null;
	shareToken: string;
	active: boolean;
}
