import { configureStore, Middleware } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import counterReducer from './counter/counterSlice'
import pokemonReducer from './pokemons/pokemonsSlice'
import { localStorageMiddleware } from './middlewares/localstorage-middleware'

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		pokemons: pokemonReducer,
	},
	/*
	middleware: (getDefaultMiddleware) =>
		// getDefaultMiddleware().concat(localStorageMiddleware), //? Option 1
		// getDefaultMiddleware({ //? Option 2
		// 	thunk: {
		// 		extraArgument: localStorageMiddleware,
		// 	},
		// 	serializableCheck: false,
		// }),
		getDefaultMiddleware().concat(localStorageMiddleware as Middleware), //? Option 3
	*/
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch

/*
? Docs:
- https://react-redux.js.org/using-react-redux/usage-with-typescript
- https://redux-toolkit.js.org/usage/usage-with-typescript
- https://redux-toolkit.js.org/usage/nextjs
*/
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
// export const useAppStore: () => AppStore = useStore
