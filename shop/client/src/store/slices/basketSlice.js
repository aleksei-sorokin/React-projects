import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basketSlice',
	initialState: {
		basket: []
	},
	reducers: {
		basketAdd(state, action) {
			state.basket = action.payload
		}
	}
})

export default basketSlice.reducer
export const {basketAdd} = basketSlice.actions