import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'productSlice',
	initialState: {
		selectedType: 0,
		selectedBrand: 0,
		types: [],
		brands: [],
		products: []
	},
	reducers: {
		getType(state, action) {
			state.types = [...action.payload]
		},
		getBrand(state, action) {
			state.brands = [...action.payload]
		},
		getProduct(state, action) {
			state.products = [...action.payload]
		},
		setSelected(state, action) {
			state[`selected${action.payload.type}`] = action.payload.id
		}
	}
})

export default productSlice.reducer
export const {getType, getBrand, getProduct, setSelected} = productSlice.actions