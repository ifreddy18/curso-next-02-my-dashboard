import { Metadata } from 'next'
import Image from 'next/image'
import { PokemonDetail } from '@/pokemons'
import { notFound } from 'next/navigation'

interface Props {
	params: { id: string }
}

//! En build time
export async function generateStaticParams() {
	const pokemonCount = 151

	const staticPokemons = Array.from({ length: pokemonCount }).map(
		(v, i) => `${i + 1}`,
	)
	return staticPokemons.map((id) => ({ id }))

	// return [
	// 	{ id: '1' },
	// 	{ id: '2' },
	// 	{ id: '3' },
	// 	{ id: '4' },
	// 	{ id: '5' },
	// 	{ id: '6' },
	// ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const { id, name } = await getPokemon(params.id)
		return {
			title: `#${id} - ${name}`,
			description: `Page of pokemon: ${name}`,
		}
	} catch (error) {
		return {
			title: 'Page of pokemon ???',
			description: 'Page of pokemon ???',
		}
	}
}

const getPokemon = async (id: string): Promise<PokemonDetail> => {
	try {
		const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
			cache: 'force-cache',
			// next: {
			//? Tiempo para no usar data en cache como respuesta
			//? No se usa cache: 'force-cache' en este caso
			//   revalidate: 3600
			// }
		}).then((resp) => resp.json())
		return pokemon
	} catch (error) {
		notFound()
	}
}

export default async function PokemonPage({ params }: Props) {
	const pokemon = await getPokemon(params.id)

	return (
		<div className="mt-5 flex flex-col items-center text-slate-800">
			<div className="relative mx-auto flex w-[700px] flex-col items-center rounded-[20px] bg-white bg-clip-border p-3 shadow-lg">
				<div className="mb-8 mt-2 w-full">
					<h1 className="px-2 text-xl font-bold capitalize text-slate-700">
						#{pokemon.id} {pokemon.name}
					</h1>
					<div className="flex flex-col items-center justify-center">
						<Image
							src={pokemon.sprites.other?.dream_world.front_default ?? ''}
							width={150}
							height={150}
							alt={`Imagen del pokemon ${pokemon.name}`}
							className="mb-5"
						/>

						<div className="flex flex-wrap">
							{pokemon.moves.map((move) => (
								<p key={move.move.name} className="mr-2 capitalize">
									{move.move.name}
								</p>
							))}
						</div>
					</div>
				</div>
				<div className="grid w-full grid-cols-2 gap-4 px-2">
					<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
						<p className="text-sm text-gray-600">Types</p>
						<div className="text-navy-700 flex text-base font-medium">
							{pokemon.types.map((type) => (
								<p key={type.slot} className="mr-2 capitalize">
									{type.type.name}
								</p>
							))}
						</div>
					</div>

					<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
						<p className="text-sm text-gray-600">Peso</p>
						<span className="text-navy-700 flex text-base font-medium">
							{pokemon.weight}
						</span>
					</div>

					<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
						<p className="text-sm text-gray-600">Regular Sprites</p>
						<div className="flex justify-center">
							<Image
								src={pokemon.sprites.front_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_default}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>

					<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 drop-shadow-lg">
						<p className="text-sm text-gray-600">Shiny Sprites</p>
						<div className="flex justify-center">
							<Image
								src={pokemon.sprites.front_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>

							<Image
								src={pokemon.sprites.back_shiny}
								width={100}
								height={100}
								alt={`sprite ${pokemon.name}`}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
