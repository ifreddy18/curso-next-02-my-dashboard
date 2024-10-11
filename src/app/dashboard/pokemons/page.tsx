import { PokemonGrid, PokemonsReponse, SimplePokemon } from '@/pokemons'

const getPokemons = async (
	limit: number = 20,
	offset: number = 0,
): Promise<SimplePokemon[]> => {
	const data: PokemonsReponse = await fetch(
		`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offser=${offset}`,
	).then((res) => res.json())

	const pokemons = data.results.map((pokemon) => ({
		id: pokemon.url.split('/').at(-2)!,
		name: pokemon.name,
	}))
	return pokemons
}

export default async function PokemonsPage() {
	const pokemons = await getPokemons(151)

	return (
		<div className="flex flex-col">
			<span className="my-2 text-5xl">
				Pokemons list <small>(static)</small>
			</span>

			<PokemonGrid pokemons={pokemons} />
		</div>
	)
}
