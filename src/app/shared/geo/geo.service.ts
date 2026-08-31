import { Injectable, signal } from '@angular/core';
import { GeoPoint } from './geo.interface';

const KYIV_CENTER: GeoPoint = { lat: 50.4501, lng: 30.5234 };
const STORAGE_KEY = 'meetka-discovery-radius-km';

/**
 * Mock location provider — falls back to the Kyiv city center when the
 * browser Geolocation API is unavailable or denied, since Phase 1 has no
 * backend to persist a real address.
 */
@Injectable({ providedIn: 'root' })
export class GeoService {
	readonly userLocation = signal<GeoPoint>(KYIV_CENTER);
	readonly discoveryRadiusKm = signal<number>(this._restoreRadius());

	constructor() {
		if (typeof navigator !== 'undefined' && navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					this.userLocation.set({
						lat: position.coords.latitude,
						lng: position.coords.longitude,
					});
				},
				() => {
					// keep the fallback location
				},
				{ timeout: 4000 },
			);
		}
	}

	setDiscoveryRadiusKm(radiusKm: number): void {
		this.discoveryRadiusKm.set(radiusKm);
		try {
			localStorage.setItem(STORAGE_KEY, String(radiusKm));
		} catch {
			// ignore write failures (e.g. storage disabled/full)
		}
	}

	private _restoreRadius(): number {
		try {
			const stored = localStorage.getItem(STORAGE_KEY);
			const parsed = stored ? Number(stored) : NaN;
			return Number.isFinite(parsed) && parsed > 0 ? parsed : 10;
		} catch {
			return 10;
		}
	}
}
