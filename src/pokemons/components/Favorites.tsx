'use client'

import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useState } from 'react'
import { IoHeartOutline } from 'react-icons/io5'

export const Favorites = () => {
	const favoritePokemons = useAppSelector((store) =>
		Object.values(store.pokemons.favorites),
	)
	// This state it's for keep pokemons when unchecked the heart
	const [pokemons, setPokemons] = useState(favoritePokemons)

  useEffect(() => {
    // console.log({ favoritePokemons })
    setPokemons(favoritePokemons)
  }, [favoritePokemons])
  

	// return <PokemonGrid pokemons={favoritePokemons} />
	return pokemons.length > 0 ? (
		<PokemonGrid pokemons={pokemons} />
	) : (
		<NoFavorites />
	)
}

export const NoFavorites = () => {
	return (
		<div className="flex h-[50vh] flex-col items-center justify-center">
			<IoHeartOutline size={100} className="text-red-500" />
			<span>There are not favorite pokemons</span>
		</div>
	)
}
