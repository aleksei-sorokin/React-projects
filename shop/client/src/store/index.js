import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';

const rootReducer = combineReducers({
	user: userSlice,
	product: productSlice
});

export const store = configureStore({
	reducer: rootReducer
})