import { CoffeeShop } from '../coffee-shop/coffee-shop.interface';
import { GeoPoint } from '../../shared/geo/geo.interface';
import { Meet } from './meet.interface';
import { distanceKm } from '../../shared/geo/geo.util';

export interface MeetsFilter {
	search?: string;
	interestIds?: string[];
	coffeeShopId?: string;
	date?: string;
	organizerId?: string;
	participantUserId?: string;
	goingOnly?: boolean;
	visibility?: 'public' | 'private';
	timeframe?: 'upcoming' | 'past' | 'all';
	recurringOnly?: boolean;
	nearbyRadiusKm?: number;
	userLocation?: GeoPoint;
}

export function filterMeets(
	meets: Meet[],
	shops: CoffeeShop[],
	filter: MeetsFilter,
): Meet[] {
	const today = new Date().toISOString().slice(0, 10);

	return meets.filter((meet) => {
		if (!meet.active) return false;

		if (filter.search) {
			const term = filter.search.toLowerCase();
			if (
				!meet.title.toLowerCase().includes(term) &&
				!meet.description.toLowerCase().includes(term)
			) {
				return false;
			}
		}

		if (filter.interestIds?.length) {
			if (!meet.interestIds.some((id) => filter.interestIds!.includes(id))) return false;
		}

		if (filter.coffeeShopId && meet.coffeeShopId !== filter.coffeeShopId) return false;

		if (filter.date && meet.date !== filter.date) return false;

		if (filter.organizerId && meet.organizerId !== filter.organizerId) return false;

		if (filter.participantUserId) {
			const participant = meet.participants.find((p) => p.userId === filter.participantUserId);
			if (!participant) return false;
			if (filter.goingOnly && !participant.going) return false;
		}

		if (filter.visibility && meet.visibility !== filter.visibility) return false;

		if (filter.recurringOnly && !meet.recurring) return false;

		if (filter.timeframe === 'upcoming' && meet.date < today) return false;
		if (filter.timeframe === 'past' && meet.date >= today) return false;

		if (filter.nearbyRadiusKm != null && filter.userLocation) {
			const shop = shops.find((s) => s.id === meet.coffeeShopId);
			if (!shop) return false;
			if (distanceKm(filter.userLocation, shop.location) > filter.nearbyRadiusKm) return false;
		}

		return true;
	});
}
