import {combineReducers, configureStore, applyMiddleware} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import productSlice from './slices/productSlice';
import userSlice from './slices/userSlice';
import dialogSlice from './slices/dialogSlice';
import basketSlice from './slices/basketSlice';

const sagaMiddleware = createSagaMiddleware({

});

const rootReducer = combineReducers({
	user: userSlice,
	product: productSlice,
	dialog: dialogSlice,
	basket: basketSlice
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: sagaMiddleware
})