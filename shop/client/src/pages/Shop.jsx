import React from 'react';
// import { setLogin, unsetLogin } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product/Product';
import '../styles/shop.scss'

const Shop = () => {
  // const auth = useSelector((state) => state.user.isAuth);
  // const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  return (
    <div className='shop-page'>
      {productList
        ? productList.map((elem) => {
            console.log('elem', elem);
            return <Product key={elem.id} info={elem} />;
          })
        : ''}
      {/* {auth ? <p>login</p> : <p>unlogin</p>}
      <button onClick={() => dispatch(setLogin())}>set login</button>
      <button onClick={() => dispatch(unsetLogin())}>unset login</button> */}
    </div>
  );
};

export default Shop;
