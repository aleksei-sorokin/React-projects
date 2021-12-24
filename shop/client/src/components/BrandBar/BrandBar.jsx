import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../store/slices/productSlice';
import './brandBar.scss';

const BrandBar = ({ info }) => {
	const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.product.selectedBrand);

	const setActive = (id) => {
    dispatch(setSelected({ type: 'Brand', id }));
  };

	return (
		<>
		{
			info.map(elem => <div 
				key={elem.id} 
				onClick={() => setActive(elem.id)} 
				className={`brand-item ${selectedItem === elem.id ? 'active' : ''}`}>{elem.name}</div>)
		}
   
		</>
  );
};

export default BrandBar;
