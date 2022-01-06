import React, { useState, useEffect } from 'react';
import { Rate } from 'element-react';
import { ratingGet, ratingAdd } from '../../utils/axios/productAPI';
import { useDispatch, useSelector } from 'react-redux';

const Rating = ({rate, productId, disable}) => {
  const userId = useSelector((state) => state.user.id);
  
	const addRating = (rate, product, userId) => {
		const rating = {
			product, 
			userId,
			rate
		}
		ratingAdd(rating)
	}

	const checkRating = (userId, product) => {
		ratingGet(userId, productId)
	}

  return (
    <div className='rating'>
			{rate}
      <Rate 
				value={rate} 
				disabled={disable | false}
				colors={['#99A9BF', '#F7BA2A', '#FF9900']}
				onChange={(val) => addRating(val, productId, userId)} />
    </div>
  );
};

export default Rating;
