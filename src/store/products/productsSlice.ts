import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { productsApi } from '../../api/products/productsApi'
import { Product } from '../../types'
import { RootState } from '../store'

type InitialState = {
	products: Product[]
	isLoading: boolean
	error: Error | unknown
}

const initialState: InitialState = {
	products: [],
	isLoading: false,
	error: null,
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		removeProduct(state, action: PayloadAction<Product>) {
			const product = action.payload
			const isExist = state.products.some(p => p.id === product.id)

			if (isExist) {
				state.products = state.products.filter(p => p.id !== product.id)
			}
		},
		addProduct(state, action: PayloadAction<Product>) {
			const product = action.payload

			state.products.unshift(product)
		},
		updateProduct(state, action: PayloadAction<Product>) {
			const product = action.payload

			const index = state.products.findIndex(p => p.id === product.id)
			if (index !== -1) state.products[index] = product
		},
	},
	extraReducers: builder => {
		builder.addMatcher(
			productsApi.endpoints.getAllProducts.matchPending,
			state => {
				state.isLoading = true
				state.error = null
			}
		)
		builder.addMatcher(
			productsApi.endpoints.getAllProducts.matchFulfilled,
			(state, action) => {
				state.isLoading = false
				state.products = action.payload
			}
		)
		builder.addMatcher(
			productsApi.endpoints.getAllProducts.matchRejected,
			(state, action) => {
				state.isLoading = false
				state.error = action.error.message
			}
		)
	},
})

export default productsSlice.reducer

export const { removeProduct, addProduct, updateProduct } =
	productsSlice.actions

export const selectProducts = (state: RootState) => state.productsSlice.products
