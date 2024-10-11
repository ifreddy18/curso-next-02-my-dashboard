import { Action, Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'

export const localStorageMiddleware = (state: MiddlewareAPI) => {
	return (next: Dispatch) => (action: Action) => {
    console.log({ state: state.getState(), action })

    next(action)

    if (action.type === 'pokemon/toggleFavorite') {
      const { pokemons } = state.getState()
      localStorage.setItem('favorite-pokemons', JSON.stringify(pokemons))
    }
  }
}
