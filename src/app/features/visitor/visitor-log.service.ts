import { Injectable, signal } from '@angular/core';
import { VisitorLogEntry } from './visitor.interface';

let _idCounter = 0;

@Injectable({ providedIn: 'root' })
export class BaristaVisitorsService {
	private readonly _entries = signal<VisitorLogEntry[]>([]);
	readonly entries = this._entries.asReadonly();

	add(name: string, note: string): void {
		const entry: VisitorLogEntry = {
			id: `visitor-log-${Date.now()}-${_idCounter++}`,
			name,
			note,
			addedAt: new Date().toISOString(),
		};
		this._entries.update((entries) => [entry, ...entries]);
	}

	updateNote(id: string, note: string): void {
		this._entries.update((entries) =>
			entries.map((entry) => (entry.id === id ? { ...entry, note } : entry)),
		);
	}

	remove(id: string): void {
		this._entries.update((entries) => entries.filter((entry) => entry.id !== id));
	}
}
