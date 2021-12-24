import React, {useState, useEffect} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Router from './utils/router';
import { check } from './utils/axios/userAPI';
import { Loading } from 'element-react';

import { setLogin, unsetLogin } from './store/slices/userSlice';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      check()
        .then((data) => {
          dispatch(setLogin());
        })
        .catch(() => {
          dispatch(unsetLogin());
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Loading loading={loading}>
        <Layout>
          <Router />
        </Layout>
      </Loading>
    </BrowserRouter>
  );
};

export default App;
