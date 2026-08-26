import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CanActivateFn, Router } from '@angular/router';
import { NGX_BOS_CONFIG } from '@wawjs/ngx-bos';

/**
 * Gates the barista tools (e.g. the visitor log) to users with the
 * `barista` role — admins are let through too, mirroring `adminsGuard`.
 */
export const baristaGuard: CanActivateFn = () => {
	const router = inject(Router);
	const config = inject(NGX_BOS_CONFIG);

	if (!isPlatformBrowser(inject(PLATFORM_ID))) {
		// See authenticatedGuard — no real session at build/prerender time, defer to the client.
		return true;
	}

	const stored = localStorage.getItem('waw_user');
	if (!stored) {
		return router.parseUrl(config.signPath);
	}

	const user = JSON.parse(stored);
	if (user.is && (user.is.barista || user.is.admin)) {
		return true;
	}
	return router.parseUrl(config.profilePath);
};
