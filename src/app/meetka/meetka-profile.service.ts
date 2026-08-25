import { Injectable, signal } from '@angular/core';

export interface MeetkaProfileExtras {
	age: number | null;
	gender: 'female' | 'male' | 'other' | '';
	interestIds: string[];
}

const STORAGE_KEY = 'meetka-profile-extras';
const DEFAULT_EXTRAS: MeetkaProfileExtras = { age: null, gender: '', interestIds: [] };

/**
 * Meetka-specific profile fields (age/gender/interests) that the shared
 * `@wawjs/ngx-bos` User model has no concept of, and Phase 1 has no backend
 * to persist them against. Stored locally per browser until a real API
 * exists.
 */
@Injectable({ providedIn: 'root' })
export class MeetkaProfileService {
	readonly extras = signal<MeetkaProfileExtras>(this._restore());

	update(extras: MeetkaProfileExtras): void {
		this.extras.set(extras);
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(extras));
		} catch {
			// ignore write failures (e.g. storage disabled/full)
		}
	}

	private _restore(): MeetkaProfileExtras {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			return raw ? { ...DEFAULT_EXTRAS, ...JSON.parse(raw) } : DEFAULT_EXTRAS;
		} catch {
			return DEFAULT_EXTRAS;
		}
	}
}
