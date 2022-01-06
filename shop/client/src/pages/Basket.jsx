import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProduct, basketDeleteAll } from '../utils/axios/productAPI';
import { basketDevicesAdd, basketClear } from '../store/slices/basketSlice';
import BasketItem from '../components/BasketItem/BasketItem';
import { Button } from 'element-react';

import '../styles/basket-page.scss'


const Basket = () => {
  const dispatch = useDispatch();
  const { basket, basket_devices, basket_price } = useSelector((state) => state.basket);
  const { id } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchData = async () => {
      if (basket.length) {
        dispatch(basketClear());
      }

      basket.forEach((elem) => {
        fetchProduct(elem.deviceId).then((data) => {
          if (data) {
            dispatch(basketDevicesAdd(data));
          }
        });
      });
    };
    fetchData();
  }, [basket]);

  const buy = (userId) => {
    basketDeleteAll(userId);
    dispatch(basketClear());
  };

  return (
    <div>
      <h2>Корзина</h2>
      <br />
      {basket_devices.length
        ? basket_devices.map((elem, idx) => {
            return <BasketItem key={idx} productData={elem} />;
          })
        : 'Ваша корзина пуста'}

      {basket_devices.length ? (
        <div className='basket__bottom'>
          <div>Общая стоимость: {basket_price}</div>
          <Button onClick={buy(id)}>Купить</Button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Basket;
