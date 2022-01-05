import {createSlice} from '@reduxjs/toolkit'

const basketSlice = createSlice({
	name: 'basketSlice',
	initialState: {
		basket: [],
		basket_devices: [],
		basket_price: 0
	},
	reducers: {
		basketAdd(state, action) {
			state.basket = action.payload
		},
		basketClear(state) {
			state.basket = []
			state.basket_devices = []
			state.basket_price = 0
		},
		basketDelete(state, action) {
			state.basket_devices = state.basket_devices.filter(elem => elem.id !== action.payload.id)
			state.basket_price -= action.payload.price
		},
		basketDevicesAdd(state, action) {
			state.basket_price += action.payload.price
			state.basket_devices.push(action.payload)
		}
	}
})

export default basketSlice.reducer
export const {basketAdd, basketDevicesAdd, basketClear, basketDelete} = basketSlice.actions