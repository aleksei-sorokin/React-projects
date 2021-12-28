import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'productSlice',
	initialState: {
		selectedType: null,
		selectedBrand: null,
		types: [],
		brands: [],
		products: [],
		page: 1,
		totalCount: 0,
		limit: 2
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
			state.setPage = 1;
		},
		setPage(state, action) {
			state.page = action.payload
		},
		setTotalCount(state, action) {
			state.totalCount = action.payload
		}
	}
})

export default productSlice.reducer
export const {getType, getBrand, getProduct, setSelected, setPage, setTotalCount} = productSlice.actions