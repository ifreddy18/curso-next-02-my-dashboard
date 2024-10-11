import { IoBrowsersOutline, IoCalculator, IoFootball, IoHeartOutline } from 'react-icons/io5'

export const menuItems = [
	{
		path: '/dashboard/main',
		icon: <IoBrowsersOutline size={40} />,
		title: 'Dashboard',
		subtitle: 'Visualization',
	},
	{
		path: '/dashboard/counter',
		icon: <IoCalculator size={40} />,
		title: 'Counter',
		subtitle: 'Counter Client Side',
	},
	{
		path: '/dashboard/pokemons',
		icon: <IoFootball size={40} />,
		title: 'Pokemon',
		subtitle: 'Pokemon client side',
	},
	{
		path: '/dashboard/favorites',
		icon: <IoHeartOutline size={40} />,
		title: 'Favorites',
		subtitle: 'Favorite pokemons global state',
	},
]