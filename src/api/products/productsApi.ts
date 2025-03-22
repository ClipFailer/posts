import { Product } from '../../types'
import { api } from '../api'

export const productsApi = api.injectEndpoints({
	endpoints: builder => ({
		// getAllProducts: builder.query<Product[], { page: number; limit: number }>({
		// 	query: ({ page, limit }) => ({
		// 		url: `posts?_page=${page}&_limit=${limit}`,
		// 		method: 'GET',
		// 	}),
		// }),
		getAllProducts: builder.query<Product[], void>({
			query: () => ({
				url: `posts`,
				method: 'GET',
			}),
		}),
		getProductById: builder.query<Product, string>({
			query: id => ({
				url: `posts/${id}`,
				method: 'GET',
			}),
		}),
	}),
})

export const {
	endpoints: { getAllProducts, getProductById },
} = productsApi
export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi
