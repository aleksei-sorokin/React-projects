import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { basketDeleteOne } from '../../utils/axios/productAPI';
import { basketDelete } from '../../store/slices/basketSlice';
import './basket-item.scss'


const BasketItem = ({ productData }) => {
  const { id } = useSelector((state) => state.user);
  const dispatch = useDispatch()

  const remove = (userId, product) => {
    basketDeleteOne({ userId, product});
    dispatch(basketDelete(productData));
  }
  
  return (
    <div className='basket__item'>
      <div className='basket__item-img'>
        <img src={process.env.REACT_APP_API_URL + productData.img} alt={productData.name} />
      </div>
      <div className='basket__item-info'>
        <div className='basket__item-delete' onClick={() => remove(id, productData.id)}>x</div>
        <div className='basket__item-title'>{productData.name}</div>
        <div className='basket__item-opt'>
          {productData.info.map((item) => {
            return (
              <div className='basket__item-opt-item' key={item.id}>
                <span>{item.title}</span>
                {item.description}
              </div>
            );
          })}
        </div>
        <div className='backet__item-price'>Цена: {productData.price}</div>
      </div>
    </div>
  );
};

export default BasketItem;
