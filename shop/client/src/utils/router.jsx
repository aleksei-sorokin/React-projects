import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import { shop_route } from './consts';
import { useSelector } from 'react-redux';

const Router = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  return (
    <Switch>
      {isAuth &&
        authRoutes.map(({ path, Component }) => 
          <Route key={path} path={path} component={Component} exact />
        )}
      {publicRoutes.map(({ path, Component }) => 
        <Route key={path} path={path} component={Component} exact />
      )}
	  <Redirect to={shop_route}></Redirect>
    </Switch>
  );
};

export default Router;
