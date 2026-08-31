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
