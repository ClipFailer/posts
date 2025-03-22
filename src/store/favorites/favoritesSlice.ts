import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'
import { RootState } from '../store'

type InitialState = {
	favorites: Product[]
}

const initialState: InitialState = {
	favorites: [],
}

export const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		toggleFavorites(state, action: PayloadAction<Product>) {
			const product = action.payload
			const isExist = state.favorites.some(p => p.id === product.id)

			if (isExist) {
				state.favorites = state.favorites.filter(p => p.id !== product.id)
			} else {
				state.favorites.unshift(product)
			}
		},
		removeFavorite(state, action: PayloadAction<Product>) {
			const product = action.payload
			const isExist = state.favorites.some(p => p.id === product.id)

			if (isExist)
				state.favorites = state.favorites.filter(p => p.id !== product.id)
		},
	},
})

export default favoritesSlice.reducer

export const { toggleFavorites, removeFavorite } = favoritesSlice.actions

export const selectFavorites = (state: RootState) =>
	state.favoritesSlice.favorites
