import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserService } from '@wawjs/ngx-bos';
import { MessageService } from '@wawjs/ngx-prime/api';
import { ToastModule } from '@wawjs/ngx-prime/toast';
import { SessionBridgeService } from './auth/session-bridge.service';
import { ThemeState } from './theme/theme-state';

@Component({
	imports: [RouterOutlet, ToastModule],
	selector: 'app-root',
	templateUrl: './app.component.html',
	providers: [MessageService],
})
export class AppComponent {
	private readonly _httpService = inject(UserService);
	// Eagerly instantiate so ThemeState.restore() runs on every route, not just /settings
	// (it's providedIn: 'root', so it otherwise stays uninjected until something needs it).
	private readonly _themeService = inject(ThemeState);
	private readonly _sessionBridge = inject(SessionBridgeService);

	constructor() {
		// Pulls a session from another already-logged-in *.webart.work app,
		// if this app doesn't already have a token of its own.
		this._sessionBridge.init();
	}
}
