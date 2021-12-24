import {combineReducers, configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';
import dialogSlice from './slices/dialogSlice';

const rootReducer = combineReducers({
	user: userSlice,
	product: productSlice,
	dialog: dialogSlice
});

export const store = configureStore({
	reducer: rootReducer
})