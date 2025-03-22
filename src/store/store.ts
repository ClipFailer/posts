import { configureStore } from '@reduxjs/toolkit'
import { api } from '../api/api'
import favoritesSlice from './favorites/favoritesSlice'
import productsSlice from './products/productsSlice'
// import usersSlice from './users/usersSlice'

export const store = configureStore({
	reducer: {
		[api.reducerPath]: api.reducer,
		productsSlice,
		// usersSlice,
		favoritesSlice,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(api.middleware),
})

export default store

export type RootState = ReturnType<typeof store.getState>
