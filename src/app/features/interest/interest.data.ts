import { Interest } from './interest.interface';

export const INTERESTS: Interest[] = [
	{ id: 'tech', label: 'Technology', icon: 'desktop' },
	{ id: 'startups', label: 'Startups', icon: 'sparkles' },
	{ id: 'design', label: 'Design', icon: 'palette' },
	{ id: 'books', label: 'Books', icon: 'book' },
	{ id: 'languages', label: 'Languages', icon: 'globe' },
	{ id: 'music', label: 'Music', icon: 'volume-up' },
	{ id: 'art', label: 'Art', icon: 'image' },
	{ id: 'sports', label: 'Sports', icon: 'bolt' },
	{ id: 'travel', label: 'Travel', icon: 'compass' },
	{ id: 'photography', label: 'Photography', icon: 'camera' },
	{ id: 'gaming', label: 'Gaming', icon: 'android' },
	{ id: 'networking', label: 'Networking', icon: 'users' },
	{ id: 'wellness', label: 'Wellness', icon: 'heart' },
	{ id: 'food', label: 'Food & Drink', icon: 'shopping-bag' },
	{ id: 'science', label: 'Science', icon: 'bookmark' },
];

export function interestById(id: string): Interest | undefined {
	return INTERESTS.find((interest) => interest.id === id);
}

export function interestsByIds(ids: string[]): Interest[] {
	return ids
		.map((id) => interestById(id))
		.filter((interest): interest is Interest => !!interest);
}
