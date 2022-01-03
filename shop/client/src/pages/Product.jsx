import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct, basket, basketGet } from '../utils/axios/productAPI';
import { Button } from 'element-react';
import placeholder from '../assets/images/placeholder.png';
import star from '../assets/images/star.png';
import '../styles/product-detail.scss';
import { useDispatch, useSelector } from 'react-redux';
import { basketAdd } from '../store/slices/basketSlice';

const Product = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();
  const userId = useSelector(state => state.user.id)


  const dispatch = useDispatch();

  const book = () => {
    dispatch(basketAdd(device))
    basket(device)
    basketGet({userId})
  }


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
        <Button onClick={book} type='primary'>Купить</Button>
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
