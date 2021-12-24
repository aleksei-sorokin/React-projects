import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product/Product';
import FilterBar from '../components/FilterBar/FilterBar';
import BrandBar from '../components/BrandBar/BrandBar';
import { fetchBrand, fetchProducts, fetchType } from '../utils/axios/productAPI';
import { getType, getBrand, getProduct } from '../store/slices/productSlice';
import '../styles/shop.scss';

const Shop = () => {
  const productList = useSelector((state) => state.product.products);
  const productType = useSelector((state) => state.product.types);
  const productBrand = useSelector((state) => state.product.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchType().then((data) => dispatch(getType(data)));
    fetchBrand().then((data) => dispatch(getBrand(data)));
    fetchProducts().then(data => dispatch(getProduct(data.rows)));
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <div className='shop-page__filters'>{productType ? <FilterBar info={productType} /> : ''}</div>
      <div className='shop-page__products'>
        {productBrand ? (
          <div className='shop-page__brands'>
            <BrandBar info={productBrand} />
          </div>
        ) : (
          ''
        )}

        {productList ? productList.map((elem) => <Product key={elem.id} info={elem} />) : ''}
      </div>
    </div>
  );
};

export default Shop;
