import React from 'react';
import { unsetLogin } from '../../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { Menu } from 'element-react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './header.scss';
import { shop_route, login_route, admin_route, basket_route } from '../../utils/consts';

const Header = () => {
  const auth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  const unsetAuth = () => {
    dispatch(unsetLogin());
    localStorage.removeItem('token')
  }

  return (
    <Menu theme='dark' defaultActive='1' className='header el-menu-demo' mode='horizontal'>
      <Menu.Item index='1'>
        <NavLink to={shop_route}>Главная</NavLink>
      </Menu.Item>
      {auth ? (
        <div className='header__menu'>
          <Menu.Item index='2'><NavLink to={admin_route}>Админ панель</NavLink></Menu.Item>
          <Menu.Item index='3'><NavLink to={basket_route}>Корзина</NavLink></Menu.Item>
          <Menu.Item index='4'><NavLink to={shop_route} onClick={unsetAuth }>Выйти</NavLink></Menu.Item>
        </div>
      ) : (
        <div className='header__menu'>
          <Menu.Item index='2'><NavLink to={login_route}>Авторизация</NavLink></Menu.Item>
        </div>
      )}
    </Menu>
  );
};

export default Header;
