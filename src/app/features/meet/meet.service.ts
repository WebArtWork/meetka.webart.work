import { Injectable, signal } from '@angular/core';
import { MEETS } from './meet.data';
import { Meet, MeetParticipant } from './meet.interface';

let _idCounter = 0;

export interface MeetDraft {
	title: string;
	description: string;
	interestIds: string[];
	coffeeShopId: string;
	visibility: 'public' | 'private';
	date: string;
	startTime: string;
	endTime: string;
	recurring: Meet['recurring'];
	participantLimit: number | null;
}

@Injectable({ providedIn: 'root' })
export class MeetsService {
	private readonly _meets = signal<Meet[]>(MEETS);
	readonly meets = this._meets.asReadonly();

	get(id: string): Meet | undefined {
		return this._meets().find((meet) => meet.id === id);
	}

	byShareToken(token: string): Meet | undefined {
		return this._meets().find((meet) => meet.shareToken === token);
	}

	create(draft: MeetDraft, organizerId: string, organizerName: string, organizerThumb: string): Meet {
		const meet: Meet = {
			id: `meet-${Date.now()}-${_idCounter++}`,
			title: draft.title,
			description: draft.description,
			interestIds: draft.interestIds,
			coffeeShopId: draft.coffeeShopId,
			date: draft.date,
			startTime: draft.startTime,
			endTime: draft.endTime,
			visibility: draft.visibility,
			organizerId,
			organizerName,
			organizerThumb,
			participantLimit: draft.participantLimit,
			participants: [{ userId: organizerId, name: organizerName, thumb: organizerThumb, going: true }],
			recurring: draft.recurring,
			shareToken: `tok-${Date.now()}-${_idCounter}`,
			active: true,
		};

		this._meets.update((meets) => [meet, ...meets]);
		return meet;
	}

	update(id: string, draft: MeetDraft): void {
		this._meets.update((meets) =>
			meets.map((meet) =>
				meet.id === id
					? {
							...meet,
							title: draft.title,
							description: draft.description,
							interestIds: draft.interestIds,
							coffeeShopId: draft.coffeeShopId,
							date: draft.date,
							startTime: draft.startTime,
							endTime: draft.endTime,
							visibility: draft.visibility,
							participantLimit: draft.participantLimit,
							recurring: draft.recurring,
						}
					: meet,
			),
		);
	}

	cancel(id: string): void {
		this._meets.update((meets) =>
			meets.map((meet) => (meet.id === id ? { ...meet, active: false } : meet)),
		);
	}

	setGoing(meetId: string, userId: string, userName: string, userThumb: string, going: boolean): void {
		this._meets.update((meets) =>
			meets.map((meet) => {
				if (meet.id !== meetId) return meet;

				const existing = meet.participants.find((p) => p.userId === userId);
				let participants: MeetParticipant[];

				if (existing) {
					participants = meet.participants.map((p) =>
						p.userId === userId ? { ...p, going } : p,
					);
				} else {
					participants = [...meet.participants, { userId, name: userName, thumb: userThumb, going }];
				}

				return { ...meet, participants };
			}),
		);
	}

	removeParticipant(meetId: string, userId: string): void {
		this._meets.update((meets) =>
			meets.map((meet) =>
				meet.id === meetId
					? { ...meet, participants: meet.participants.filter((p) => p.userId !== userId) }
					: meet,
			),
		);
	}
}
