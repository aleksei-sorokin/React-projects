import React from 'react';
import { setLogin, unsetLogin } from '../store/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const Shop = () => {
	const auth = useSelector(state => state.user.isAuth)
	const dispatch = useDispatch()

	return (
		<div>
			{ auth ? <p>login</p>:<p>unlogin</p>}
			<button onClick={() => dispatch(setLogin())}>set login</button>
			<button onClick={() => dispatch(unsetLogin())}>unset login</button>
		</div>
	)
}

export default Shop