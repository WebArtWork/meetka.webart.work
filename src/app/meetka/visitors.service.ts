import { Injectable, signal } from '@angular/core';
import { VISITORS } from '@data/meetka/visitors';
import { Visitor } from './meetka.models';

@Injectable({ providedIn: 'root' })
export class VisitorsService {
	private readonly _visitors = signal<Visitor[]>(VISITORS);
	readonly visitors = this._visitors.asReadonly();

	get(id: string): Visitor | undefined {
		return this._visitors().find((visitor) => visitor.id === id);
	}
}
