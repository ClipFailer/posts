// import { User } from '../../types'
// import { api } from '../api'

// export const usersApi = api.injectEndpoints({
// 	endpoints: builder => ({
// 		getAllUsers: builder.query<User[], void>({
// 			query: () => ({
// 				url: 'users',
// 				method: 'GET',
// 			}),
// 		}),
// 		getUserById: builder.query<User, string>({
// 			query: id => ({
// 				url: `users/${id}`,
// 				method: 'GET',
// 			}),
// 		}),
// 	}),
// })

// export const {
// 	endpoints: { getAllUsers, getUserById },
// } = usersApi

// export const { useGetAllUsersQuery, useGetUserByIdQuery } = usersApi
