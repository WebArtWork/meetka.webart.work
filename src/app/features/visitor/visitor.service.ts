import { Injectable, signal } from '@angular/core';
import { VISITORS } from './visitor.data';
import { Visitor } from './visitor.interface';

@Injectable({ providedIn: 'root' })
export class VisitorsService {
	private readonly _visitors = signal<Visitor[]>(VISITORS);
	readonly visitors = this._visitors.asReadonly();

	get(id: string): Visitor | undefined {
		return this._visitors().find((visitor) => visitor.id === id);
	}

	/** Accepts a new walk-in as a full visitor profile (onboarding flow). */
	add(visitor: Omit<Visitor, 'id'>): Visitor {
		const created: Visitor = {
			...visitor,
			id: `visitor-${crypto.randomUUID()}`,
		};

		this._visitors.update((visitors) => [...visitors, created]);

		return created;
	}
}
