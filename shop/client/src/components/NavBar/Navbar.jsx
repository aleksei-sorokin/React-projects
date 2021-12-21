import React from 'react';
import { useSelector } from 'react-redux';
import './navbar.scss';

const NavBar = () => {
	const auth = useSelector(state => state.user.isAuth)
  return (
	  <>
	  navbar
	  </>
  );
};

export default NavBar;
