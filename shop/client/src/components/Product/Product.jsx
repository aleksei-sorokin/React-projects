import React from 'react';
import { Card, Button } from 'element-react';
import {NavLink} from 'react-router-dom'
import './product.scss'
import placeholder from '../../assets/images/placeholder.png'
import star from '../../assets/images/star.png'

const Product = ({ info }) => {
  console.log('props', { info });
  return (
    <div className='product-card'>
        <Card>
					{info.img ? (
						<img src={info.img} alt={info.name} />
					) : (
						<img src={placeholder} alt="" />
					)}
          
          <div>
            <span>{info.name}</span>
						<div>Цена: {info.price}</div>
						<div className='product-card__rating'><img src={star} alt="рейтинг"/> {info.rating}</div>
            <div className='bottom clearfix'>
              <Button type='text' className='button'>
								<NavLink to={`/product/${info.id}`}>Купить</NavLink>
              
              </Button>
            </div>
          </div>
        </Card>
    </div>
  );
};

export default Product;
