'use client'

import { SimplePokemon } from '@/pokemons'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const storageKey = 'favorite-pokemons'

/*
{
	favorites: {
  	'1': { id: 1, name: 'bulbasaur' },
  	'4': { id: 4, name: 'charmander' },
	}
}
*/
interface PokemonState {
	favorites: { [key: string]: SimplePokemon }
}

const getInitialState = (): PokemonState => {
	// if (typeof localStorage === 'undefined') return {}
	const favorites = JSON.parse(localStorage.getItem(storageKey) ?? '{}')
	return favorites
}

const initialState: PokemonState = {
	favorites: {},
	// ...getInitialState(),
	// '4': { id: '4', name: 'charmander' },
}

const pokemonSlice = createSlice({
	name: 'pokemon',
	initialState,
	reducers: {
		setFavoritePokemons(
			state,
			action: PayloadAction<{ [key: string]: SimplePokemon }>,
		) {
			state.favorites = action.payload
		},

		toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
			const pokemon = action.payload
			const { id } = pokemon

			// if not exist
			if (!state.favorites[id]) {
				state.favorites[id] = pokemon
			} else {
				delete state.favorites[id]
			}

			//! Anti-pattern: Don't do it in redux. Use middleware instead
			localStorage.setItem(storageKey, JSON.stringify(state.favorites))
		},
	},
})

export const { setFavoritePokemons, toggleFavorite } = pokemonSlice.actions

export default pokemonSlice.reducer
