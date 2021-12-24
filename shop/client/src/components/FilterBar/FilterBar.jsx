import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSelected } from '../../store/slices/productSlice';
import './filterBar.scss';

const FilterBar = ({ info }) => {
  const dispatch = useDispatch();
  const selectedItem = useSelector((state) => state.product.selectedType);

  const setActive = (id) => {
    dispatch(setSelected({ type: 'Type', id }));
  };

  return (
		<>
		{
			info.map(elem => <div 
				key={elem.id} 
				onClick={() => setActive(elem.id)} 
				className={`filter-item ${selectedItem === elem.id ? 'active' : ''}`}>{elem.name}</div>)
		}
		</>
  );
};

export default FilterBar;
