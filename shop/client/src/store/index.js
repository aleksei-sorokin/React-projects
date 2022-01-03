import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';
import dialogSlice from './slices/dialogSlice';
import basketSlice from './slices/basketSlice';

const rootReducer = combineReducers({
	user: userSlice,
	product: productSlice,
	dialog: dialogSlice,
	basket: basketSlice
});

export const store = configureStore({
	reducer: rootReducer
})