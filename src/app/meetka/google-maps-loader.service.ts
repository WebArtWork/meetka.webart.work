import { Injectable, isDevMode } from '@angular/core';
import { environment } from '@env';

declare global {
	interface Window {
		google?: { maps?: unknown };
	}
}

/**
 * Lazily injects the Google Maps JS API script that `@wawjs/ngx-map`'s
 * `lib-map` component relies on (it only wraps `google.maps`, it doesn't
 * load the script itself). Safe to call multiple times — the script is only
 * injected once. Resolves `false` when no API key is configured yet, so
 * callers can render a fallback instead of a broken map.
 */
@Injectable({ providedIn: 'root' })
export class GoogleMapsLoaderService {
	private _loadPromise: Promise<boolean> | null = null;

	load(): Promise<boolean> {
		if (!environment.googleMapsApiKey) {
			return Promise.resolve(false);
		}

		if (typeof window !== 'undefined' && window.google?.maps) {
			return Promise.resolve(true);
		}

		if (!this._loadPromise) {
			this._loadPromise = new Promise<boolean>((resolve) => {
				const script = document.createElement('script');
				script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.googleMapsApiKey}&libraries=places`;
				script.async = true;
				script.onload = () => resolve(true);
				script.onerror = () => {
					if (isDevMode()) {
						console.error('Failed to load the Google Maps JS API script.');
					}
					resolve(false);
				};
				document.head.appendChild(script);
			});
		}

		return this._loadPromise;
	}
}
