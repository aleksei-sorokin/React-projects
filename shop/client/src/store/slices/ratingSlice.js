import {createSlice} from '@reduxjs/toolkit'

const ratingSlice = createSlice({
	name: 'ratingSlice',
	initialState: {
		rating: []
	},
	reducers: {
		ratingAdd(state, action) {
			state.basket = action.payload
		}
	}
})

export default ratingSlice.reducer
export const {ratingAdd} = ratingSlice.actions