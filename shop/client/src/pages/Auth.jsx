import React, { useState, useRef } from 'react';
import { useLocation, NavLink, useHistory } from 'react-router-dom';
import { login_route, register_route, shop_route } from '../utils/consts';
import { Form, Input, Button } from 'element-react';
import { setLogin, unsetLogin } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import '../styles/authForm.scss';
import { registration, login } from '../utils/axios/userAPI';

const Auth = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const formRef = useRef();
  const location = useLocation();
  const isLogin = location.pathname === login_route;
  const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });

  const rules = {
    name: [{ required: true, message: 'Введите имя', trigger: 'blur' }],
    email: [
      { required: true, message: 'Введите email', trigger: 'blur' },
      { type: 'email', message: 'Введите корректный email', trigger: 'blur,change' },
    ],
    password: [
      { required: true, message: 'Введите пароль', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Введите пароль'));
          } else {
            if (form.confirmPassword !== '') {
              formRef.current.validateField('confirmPassword');
            }
            callback();
          }
        },
      },
    ],
    confirmPassword: [
      { required: true, message: 'Повторите пароль', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          if (value === '') {
            callback(new Error('Повторите пароль'));
          } else if (value !== form.password) {
            callback(new Error('Пароли не совпадают'));
          } else {
            callback();
          }
        },
      },
    ],
  };

  const authFunc = async () => {
    try {
      if (isLogin) {
        await login(form.email, form.password);
      } else {
        await registration(form.email, form.password);
      }

      dispatch(setLogin());
      history.push(shop_route);
    } catch (e) {
      dispatch(unsetLogin());
      console.log('error', e);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.validate((valid) => {
      if (valid) {
        authFunc();
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  };

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  return (
    <Form ref={formRef} model={form} rules={rules} labelWidth='120' labelPosition='top' className='authForm' onSubmit={onSubmit.bind(this)}>
      {!isLogin ? (
        <Form.Item label='Name' prop='name'>
          <Input value={form.name} type='text' name='name' onChange={onChange.bind(this, 'name')}></Input>
        </Form.Item>
      ) : (
        ''
      )}

      <Form.Item label='Email' prop='email'>
        <Input value={form.email} type='email' name='email' onChange={onChange.bind(this, 'email')}></Input>
      </Form.Item>

      <Form.Item label='Password' prop='password'>
        <Input value={form.password} type='password' name='password' onChange={onChange.bind(this, 'password')}></Input>
      </Form.Item>

      {!isLogin ? (
        <Form.Item label='Configm password' prop='confirmPassword'>
          <Input value={form.confirmPassword} type='password' name='confirmPassword' onChange={onChange.bind(this, 'confirmPassword')}></Input>
        </Form.Item>
      ) : (
        ''
      )}
      <Form.Item className='authForm__bottom'>
        {isLogin ? (
          <div>
            Не аккаунта? <NavLink to={register_route}>Регистрация</NavLink>
          </div>
        ) : (
          <div>
            Есть аккаунт? <NavLink to={login_route}>Войти</NavLink>
          </div>
        )}

        <Button nativeType='submit' type='primary'>
          {isLogin ? 'Войти' : 'Регистрация'}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Auth;
