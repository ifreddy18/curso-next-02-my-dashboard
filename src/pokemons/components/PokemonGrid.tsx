import { SimplePokemon } from '../interfaces'
import { PokemonCard } from './PokemonCard'

interface Props {
	pokemons: SimplePokemon[]
}

export const PokemonGrid = ({ pokemons }: Props) => {
	return (
		<div className="flex flex-wrap justify-center items-center gap-4">
			{pokemons.map((pokemon) => (
				<PokemonCard key={pokemon.id} pokemon={pokemon} />
			))}
		</div>
	)
}
