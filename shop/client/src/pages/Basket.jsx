import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { basketAdd } from '../store/slices/basketSlice';

const Basket = () => {
	const dispatch = useDispatch();

	return (
		<div>
			Basket
		</div>
	)
}

export default Basket