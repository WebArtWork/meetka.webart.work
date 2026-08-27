export interface GeoPoint {
	lat: number;
	lng: number;
}

export interface Interest {
	id: string;
	label: string;
	icon: string;
}

export interface MenuProductOption {
	label: string;
	price: number;
}

export interface MenuProduct {
	id: string;
	name: string;
	description: string;
	price: number;
	options?: MenuProductOption[];
	available: boolean;
}

export interface MenuCategory {
	id: string;
	name: string;
	products: MenuProduct[];
}

export interface CoffeeShop {
	id: string;
	/** URL-friendly identifier used in `/coffee-shop/:coffeeShopSlug` and `/menu/:coffeeShopSlug`. */
	slug: string;
	name: string;
	photos: string[];
	address: string;
	location: GeoPoint;
	workingHours: string;
	phone: string;
	description: string;
	interestIds: string[];
	menu: MenuCategory[];
	baristaIds: string[];
}

export type RecurrenceType = 'weekly' | 'biweekly' | 'monthly';

export interface MeetRecurrence {
	type: RecurrenceType;
	days: number[];
	endDate?: string;
}

export interface MeetParticipant {
	userId: string;
	name: string;
	thumb: string;
	going: boolean;
}

export interface Meet {
	id: string;
	title: string;
	description: string;
	interestIds: string[];
	coffeeShopId: string;
	date: string;
	startTime: string;
	endTime: string;
	visibility: 'public' | 'private';
	organizerId: string;
	organizerName: string;
	organizerThumb: string;
	participantLimit: number | null;
	participants: MeetParticipant[];
	recurring: MeetRecurrence | null;
	shareToken: string;
	active: boolean;
}

export interface BaristaProfile {
	id: string;
	name: string;
	photo: string;
	coffeeShopId: string;
	bio: string;
	interestIds: string[];
	available: boolean;
	tipLinks: { label: string; url: string }[];
	socialLinks: { label: string; url: string }[];
}

/** A regular Meetka attendee's public profile (as opposed to a barista's). */
export interface Visitor {
	id: string;
	name: string;
	photo: string;
	bio: string;
	interestIds: string[];
	socialLinks: { label: string; url: string }[];
}

/** A walk-in noted by a barista — not tied to a Meetka account/profile. */
export interface VisitorLogEntry {
	id: string;
	name: string;
	note: string;
	addedAt: string;
}
