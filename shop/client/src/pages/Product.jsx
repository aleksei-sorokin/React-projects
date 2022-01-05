import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { fetchProduct, basket, basketGet } from '../utils/axios/productAPI';
import { Button } from 'element-react';
import placeholder from '../assets/images/placeholder.png';
import star from '../assets/images/star.png';
import '../styles/product-detail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd } from '../store/slices/basketSlice';

import { basket_route } from '../utils/consts';

const Product = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const userId = useSelector((state) => state.user.id);
  const basketItems = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const book = async () => {
    await basket({ userId, product: Number(id) });
    await basketGet(userId).then((data) => (data.basket_devices ? dispatch(basketAdd(data.basket_devices)) : ''));
  };

  useEffect(() => {
    fetchProduct(id).then((data) => {
      setDevice({ ...data });
    });
  }, [id]);

  return (
    <div className='product-page'>
      <div className='product-page__left'>
        <div className='product-page__img'>{device.img ? <img src={process.env.REACT_APP_API_URL + device.img} alt={device.name} /> : <img src={placeholder} alt='' />}</div>
        <div className='product-page__name'>{device.name}</div>
        <div className='product-page__rating'>
          <img src={star} alt='рейтинг' /> {device.rating}
        </div>
        <div className='product-page__price'>
          цена: <b>{device.price}</b>
        </div>
        {basketItems.find((elem) => elem.deviceId === device.id) ? (
          <NavLink to={basket_route}>В корзину</NavLink>
        ) : (
          <Button onClick={book} type='primary'>
            Купить
          </Button>
        )}
      </div>

      <div className='product-page__desc'>
        <p>
          <b>Характеристики</b>
        </p>
        {device.info.map((elem) => (
          <div className='product-page__desc-item' key={elem.id}>
            <b>{elem.title}</b>
            {elem.description}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
