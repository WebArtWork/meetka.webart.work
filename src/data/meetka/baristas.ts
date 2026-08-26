import { BaristaProfile } from '../../app/meetka/meetka.models';

/**
 * Placeholder barista profiles. Replace with real staff data before launch.
 */
export const BARISTA_PROFILES: BaristaProfile[] = [
	{
		id: 'barista-oksana',
		name: 'Oksana',
		photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400',
		coffeeShopId: 'shop-lviv-croissant',
		bio: 'Loves introducing regulars to each other over a shared love of filter coffee.',
		interestIds: ['tech', 'books', 'wellness'],
		available: true,
		tipLinks: [{ label: 'Monobank jar', url: 'https://send.monobank.ua/example' }],
		socialLinks: [{ label: 'Instagram', url: 'https://instagram.com/example' }],
	},
	{
		id: 'barista-ivan',
		name: 'Ivan',
		photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400',
		coffeeShopId: 'shop-print-station',
		bio: 'Runs the weekly language exchange evenings and knows every regular by name.',
		interestIds: ['languages', 'networking', 'gaming'],
		available: true,
		tipLinks: [],
		socialLinks: [{ label: 'Instagram', url: 'https://instagram.com/example' }],
	},
	{
		id: 'barista-marta',
		name: 'Marta',
		photo: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=400',
		coffeeShopId: 'shop-podil-roasters',
		bio: 'Former graphic designer, now pulls shots and curates the shop art wall.',
		interestIds: ['design', 'art', 'photography'],
		available: false,
		tipLinks: [{ label: 'PayPal', url: 'https://paypal.me/example' }],
		socialLinks: [],
	},
];
