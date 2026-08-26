import { CoffeeShop } from '../../app/meetka/meetka.models';

/**
 * Placeholder coffee shops. Replace with real venues before launch —
 * every field here (photos, address, location, menu, baristaIds) is
 * sample data.
 */
export const COFFEE_SHOPS: CoffeeShop[] = [
	{
		id: 'shop-lviv-croissant',
		name: 'Lviv Croissants',
		photos: ['https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800'],
		address: 'Khreshchatyk St 15, Kyiv',
		location: { lat: 50.4489, lng: 30.5238 },
		workingHours: 'Mon–Sun 08:00–21:00',
		phone: '+380 44 123 4567',
		description: 'A cozy corner known for fresh croissants and single-origin filter coffee, popular with the local tech crowd.',
		interestIds: ['tech', 'startups', 'books'],
		baristaIds: ['barista-oksana', 'barista-ivan'],
		menu: [
			{
				id: 'cat-coffee',
				name: 'Coffee',
				products: [
					{ id: 'p1', name: 'Espresso', description: 'Double shot, house blend', price: 65, available: true },
					{ id: 'p2', name: 'Flat White', description: 'Espresso with steamed milk', price: 85, options: [{ label: 'Oat milk', price: 15 }], available: true },
					{ id: 'p3', name: 'Filter Coffee', description: 'Rotating single-origin', price: 90, available: true },
				],
			},
			{
				id: 'cat-pastry',
				name: 'Pastry',
				products: [
					{ id: 'p4', name: 'Butter Croissant', description: 'Baked fresh every morning', price: 55, available: true },
					{ id: 'p5', name: 'Almond Croissant', description: 'Filled with almond cream', price: 70, available: false },
				],
			},
		],
	},
	{
		id: 'shop-podil-roasters',
		name: 'Podil Roasters',
		photos: ['https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=800'],
		address: 'Kontraktova Sq 4, Kyiv',
		location: { lat: 50.4643, lng: 30.5169 },
		workingHours: 'Mon–Fri 07:30–20:00, Sat–Sun 09:00–20:00',
		phone: '+380 44 234 5678',
		description: 'In-house roastery with a big communal table, a magnet for designers and creatives.',
		interestIds: ['design', 'art', 'photography'],
		baristaIds: ['barista-marta'],
		menu: [
			{
				id: 'cat-coffee',
				name: 'Coffee',
				products: [
					{ id: 'p1', name: 'Cappuccino', description: 'Classic Italian style', price: 75, available: true },
					{ id: 'p2', name: 'Cold Brew', description: '18-hour steeped', price: 95, available: true },
				],
			},
		],
	},
	{
		id: 'shop-print-station',
		name: 'Print Station Coffee',
		photos: ['https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800'],
		address: 'Antonovycha St 20, Kyiv',
		location: { lat: 50.4276, lng: 30.5194 },
		workingHours: 'Mon–Sun 08:00–22:00',
		phone: '+380 44 345 6789',
		description: 'Former print house turned coffee shop, hosts language exchange evenings every week.',
		interestIds: ['languages', 'networking', 'books'],
		baristaIds: ['barista-ivan'],
		menu: [
			{
				id: 'cat-coffee',
				name: 'Coffee',
				products: [
					{ id: 'p1', name: 'Americano', description: 'Espresso with hot water', price: 60, available: true },
					{ id: 'p2', name: 'Latte', description: 'Espresso with steamed milk', price: 80, options: [{ label: 'Extra shot', price: 20 }], available: true },
				],
			},
			{
				id: 'cat-tea',
				name: 'Tea',
				products: [{ id: 'p3', name: 'Herbal Tea', description: 'Rotating seasonal blend', price: 55, available: true }],
			},
		],
	},
	{
		id: 'shop-run-club-cafe',
		name: 'Run Club Café',
		photos: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800'],
		address: 'Naberezhno-Khreshchatytska St 10, Kyiv',
		location: { lat: 50.4581, lng: 30.5145 },
		workingHours: 'Mon–Sun 06:30–19:00',
		phone: '+380 44 456 7890',
		description: 'Coffee shop by the river, meeting point for morning runners and wellness meets.',
		interestIds: ['sports', 'wellness'],
		baristaIds: ['barista-oksana'],
		menu: [
			{
				id: 'cat-coffee',
				name: 'Coffee',
				products: [{ id: 'p1', name: 'Espresso', description: 'Double shot', price: 60, available: true }],
			},
			{
				id: 'cat-smoothie',
				name: 'Smoothies',
				products: [{ id: 'p2', name: 'Green Smoothie', description: 'Spinach, apple, ginger', price: 100, available: true }],
			},
		],
	},
	{
		id: 'shop-board-and-bean',
		name: 'Board & Bean',
		photos: ['https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800'],
		address: 'Velyka Vasylkivska St 55, Kyiv',
		location: { lat: 50.4312, lng: 30.5228 },
		workingHours: 'Mon–Sun 10:00–23:00',
		phone: '+380 44 567 8901',
		description: 'Board games, specialty coffee, and a monthly gaming meetup community.',
		interestIds: ['gaming', 'networking', 'food'],
		baristaIds: ['barista-marta', 'barista-ivan'],
		menu: [
			{
				id: 'cat-coffee',
				name: 'Coffee',
				products: [{ id: 'p1', name: 'Mocha', description: 'Espresso, chocolate, steamed milk', price: 90, available: true }],
			},
		],
	},
];
