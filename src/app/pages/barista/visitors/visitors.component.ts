import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from '@wawjs/ngx-prime/inputtext';
import { TextareaModule } from '@wawjs/ngx-prime/textarea';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TranslateService } from '@wawjs/ngx-translate';
import { BaristaVisitorsService } from '../../../meetka/barista-visitors.service';

@Component({
	selector: 'app-barista-visitors',
	imports: [FormsModule, InputTextModule, TextareaModule, ButtonModule],
	templateUrl: './visitors.component.html',
	styleUrl: './visitors.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BaristaVisitorsPageComponent {
	private readonly _visitorsService = inject(BaristaVisitorsService);
	readonly translateService = inject(TranslateService);

	readonly visitors = this._visitorsService.entries;

	readonly newName = signal('');
	readonly newNote = signal('');

	addVisitor(): void {
		const name = this.newName().trim();
		if (!name) return;

		this._visitorsService.add(name, this.newNote().trim());
		this.newName.set('');
		this.newNote.set('');
	}

	updateNote(id: string, note: string): void {
		this._visitorsService.updateNote(id, note);
	}

	removeVisitor(id: string): void {
		this._visitorsService.remove(id);
	}
}
