import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
	name: 'productSlice',
	initialState: {
		types: [
			{id: 1, name: 'first type'},
			{id: 2, name: 'second type'}
		],
		brands: [
			{id: 1, name: 'first brand'},
			{id: 2, name: 'second brand'}
		],
		products: [
			{
				id: 1, 
				name: 'first product',
				price: 100,
				rating: 4,
				img: ''
			},
			{
				id: 2, name: 'second product',
				price: 120,
				rating: 5,
				img: ''
			}
		]
	},
	reducers: {
		addType(state, action) {
			state.types.push(action.payload)
		},
		addBrand(state, action) {
			state.brands.push(action.payload)
		},
		addProduct(state, action) {
			state.products.push(action.payload)
		}
	}
})

export default productSlice.reducer
export const {addType, addBrand, addProduct} = productSlice.actions