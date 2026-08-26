import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { ButtonModule } from '@wawjs/ngx-prime/button';
import { TagModule } from '@wawjs/ngx-prime/tag';
import { MessageService } from '@wawjs/ngx-prime/api';
import { MetaService } from '@wawjs/ngx-core';
import { TranslateService } from '@wawjs/ngx-translate';
import { BaristasService } from '../../../meetka/baristas.service';
import { VisitorsService } from '../../../meetka/visitors.service';
import { CoffeeShopsService } from '../../../meetka/coffee-shops.service';
import { InterestChipsComponent } from '../../../shared/meetka/interest-chips.component';
import { meetkaSeoImage } from '../meetka.seo';

export type ProfileKind = 'barista' | 'visitor';

@Component({
	selector: 'app-profile-page',
	imports: [ButtonModule, TagModule, InterestChipsComponent],
	templateUrl: './profile-page.component.html',
	styleUrl: './profile-page.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
	private readonly _router = inject(Router);
	private readonly _activatedRoute = inject(ActivatedRoute);
	private readonly _baristasService = inject(BaristasService);
	private readonly _visitorsService = inject(VisitorsService);
	private readonly _coffeeShopsService = inject(CoffeeShopsService);
	private readonly _messageService = inject(MessageService);
	private readonly _metaService = inject(MetaService);
	readonly translateService = inject(TranslateService);

	readonly kind = toSignal(
		this._activatedRoute.data.pipe(map((data) => data['profileKind'] as ProfileKind)),
		{ initialValue: this._activatedRoute.snapshot.data['profileKind'] as ProfileKind },
	);

	private readonly _id = toSignal(
		this._activatedRoute.paramMap.pipe(map((params) => params.get('id') ?? '')),
		{ initialValue: '' },
	);

	readonly barista = computed(() =>
		this.kind() === 'barista' ? this._baristasService.get(this._id()) : undefined,
	);
	readonly visitor = computed(() =>
		this.kind() === 'visitor' ? this._visitorsService.get(this._id()) : undefined,
	);

	readonly coffeeShop = computed(() => {
		const barista = this.barista();
		return barista ? this._coffeeShopsService.get(barista.coffeeShopId) : undefined;
	});

	/** Fields shared by both barista and visitor profiles. */
	readonly person = computed(() => this.barista() ?? this.visitor());

	constructor() {
		effect(() => {
			const person = this.person();
			if (!person) return;
			this._metaService.applyMeta({
				title: person.name,
				description: person.bio,
				image: person.photo ?? meetkaSeoImage,
			});
		});
	}

	openCoffeeShop(): void {
		const shop = this.coffeeShop();
		if (shop) this._router.navigate(['/coffee-shop', shop.id]);
	}

	shareProfile(): void {
		const person = this.person();
		if (!person) return;
		const url = `${window.location.origin}/${this.kind()}/${person.id}`;
		navigator.clipboard?.writeText(url).then(() => {
			this._messageService.add({
				severity: 'success',
				detail: this.translateService.translate('Link copied to clipboard')(),
			});
		});
	}
}
