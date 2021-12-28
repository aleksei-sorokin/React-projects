import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Pagination as Nav } from 'element-react';
import { setPage } from '../../store/slices/productSlice';


const Pagination = () => {
	const product = useSelector((state) => state.product);
	const pageCount = Math.ceil(product.totalCount / product.limit)
	const dispatch = useDispatch();


	const onChange = (e) => {
		dispatch(setPage(e))
	}

	return  pageCount > 1 ? <Nav layout='prev, pager, next' onCurrentChange={onChange}  pageCount={pageCount}  /> : ''
}

export default Pagination