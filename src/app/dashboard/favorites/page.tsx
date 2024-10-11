import { Metadata } from 'next'
import { Favorites } from '@/pokemons'

export const metadata: Metadata = {
	title: 'Favorite pokemons',
	description: 'List of favorite pokemons',
}

export default async function FavoritesPage() {
	return (
		<div className="flex flex-col">
			<span className="my-2 text-5xl">
				Pokemons list <small className="text-blue-500">(Global State)</small>
			</span>

			<Favorites />
		</div>
	)
}
