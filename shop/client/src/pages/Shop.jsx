import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from '../components/Product/Product';
import FilterBar from '../components/FilterBar/FilterBar';
import BrandBar from '../components/BrandBar/BrandBar';
import { fetchBrand, fetchProducts, fetchType } from '../utils/axios/productAPI';
import { getType, getBrand, getProduct, setTotalCount } from '../store/slices/productSlice';
import Pagination from '../components/Pagination/Pagination';
import '../styles/shop.scss';

const Shop = () => {
  const productList = useSelector((state) => state.product.products);
  const productType = useSelector((state) => state.product.types);
  const productBrand = useSelector((state) => state.product.brands);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchType().then((data) => dispatch(getType(data)));
    fetchBrand().then((data) => dispatch(getBrand(data)));
    fetchProducts(null, null, 1, 2).then((data) => {
      dispatch(getProduct(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchProducts(product.selectedType, product.selectedBrand, product.page, 2).then((data) => {
      dispatch(getProduct(data.rows));
      dispatch(setTotalCount(data.count));
    });
  }, [dispatch, product.page, product.selectedBrand, product.selectedType])

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
        {productList ? (
          <div className='shop-page__pagination'>
            <Pagination />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Shop;
