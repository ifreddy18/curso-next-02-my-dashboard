'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemonsSlice'

interface Props {
	pokemon: SimplePokemon
}

const getImageSource = (id: number | string): string => {
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export const PokemonCard = ({ pokemon }: Props) => {
	const { id, name } = pokemon
	const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id])
	const dispatch = useAppDispatch()

	const onToggle = () => {
		dispatch(toggleFavorite(pokemon))
	}

	return (
		<div className="right-0 mx-auto mt-2 w-60">
			<div className="flex flex-col overflow-hidden rounded bg-white shadow-lg">
				<div className="flex flex-col items-center justify-center border-b bg-gray-800 p-6 text-center">
					<Image
						key={pokemon.id}
						src={getImageSource(pokemon.id)}
						width={100}
						height={100}
						alt={pokemon.name}
						priority={false}
					/>

					<p className="pt-2 text-lg font-semibold capitalize text-gray-50">
						{name}
					</p>
					<div className="mt-5">
						<Link
							href={`/dashboard/pokemons/${name}`}
							className="rounded-full border px-4 py-2 text-xs font-semibold text-gray-100"
						>
							More information
						</Link>
					</div>
				</div>
				<div className="border-b">
					<div className="flex cursor-pointer items-center px-4 py-2 hover:bg-gray-100">
						<div className="text-red-600">
							{isFavorite ? <IoHeart /> : <IoHeartOutline />}
						</div>
						<div className="pl-3" onClick={onToggle}>
							<p className="text-sm font-medium leading-none text-gray-800">
								{isFavorite ? 'is favorite' : 'is not favorite'}
							</p>
							<p className="text-xs text-gray-500">Click for change</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
