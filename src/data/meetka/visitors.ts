import { Visitor } from '../../app/meetka/meetka.models';

/**
 * Placeholder visitor (attendee) profiles. Replace with real user data
 * before launch.
 */
export const VISITORS: Visitor[] = [
	{
		id: 'visitor-denys',
		name: 'Denys',
		photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400',
		bio: 'Frontend engineer who never says no to a filter coffee and a good framework debate.',
		interestIds: ['tech', 'startups', 'books'],
		socialLinks: [{ label: 'Instagram', url: 'https://instagram.com/example' }],
	},
	{
		id: 'visitor-anna',
		name: 'Anna',
		photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
		bio: 'Runs the local language exchange crowd and collects coffee shop recommendations.',
		interestIds: ['languages', 'networking'],
		socialLinks: [],
	},
];
