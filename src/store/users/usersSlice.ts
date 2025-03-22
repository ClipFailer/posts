// import { createSlice } from '@reduxjs/toolkit'
// import { usersApi } from '../../api/users/usersApi'
// import { User } from '../../types'
// import { RootState } from '../store'

// type InitialState = {
// 	users: User[]
// 	isLoading: boolean
// 	error: Error | unknown
// }

// const initialState: InitialState = {
// 	users: [],
// 	isLoading: false,
// 	error: null,
// }

// export const usersSlice = createSlice({
// 	name: 'users',
// 	initialState,
// 	reducers: {},
// 	extraReducers: builder => {
// 		builder.addMatcher(usersApi.endpoints.getAllUsers.matchPending, state => {
// 			state.isLoading = true
// 			state.error = null
// 		})
// 		builder.addMatcher(
// 			usersApi.endpoints.getAllUsers.matchFulfilled,
// 			(state, action) => {
// 				state.isLoading = false
// 				state.users = action.payload
// 			}
// 		)
// 		builder.addMatcher(
// 			usersApi.endpoints.getAllUsers.matchRejected,
// 			(state, action) => {
// 				state.isLoading = false
// 				state.error = action.error.message
// 			}
// 		)
// 	},
// })

// export default usersSlice.reducer

// export const selectUsers = (state: RootState) => state.usersSlice
