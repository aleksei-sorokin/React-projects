import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProduct } from '../utils/axios/productAPI';

const Basket = () => {
	const dispatch = useDispatch();
	const basket = useSelector(state => state.basket.basket)

	const devices = basket.map(elem => {
		return fetchProduct(elem.deviceId).then((data) => {
      return data
    });
	})

	console.log(devices)

	return (
		<div>
			{devices.map( elem => {
				return <div key={elem.id}>{elem.name}</div>
			})}
		</div>
	)
}

export default Basket