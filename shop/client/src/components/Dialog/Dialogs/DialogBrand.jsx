import React, { useState, useRef } from 'react';
import { Form, Input, Button, Notification } from 'element-react';
import { createBrand } from '../../../utils/axios/productAPI';

const DialogBrand = ({ hideDialog }) => {
  const formRef = useRef();
  const rules = {
    brand: [{ required: true, message: 'Введите бренд', trigger: 'blur' }],
  };

  const [form, setForm] = useState({
    brand: '',
  });

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.validate((valid) => {
      if (valid) {
        createBrand({ name: form.brand })
          .then(() => {
            hideDialog();
            setForm({ brand: '' });
            hideDialog();
            Notification({
              title: 'Успех',
              message: 'Бренд добавлен',
              type: 'success',
            });
          })
          .catch((e) => {
            Notification({
              title: 'Что-то пошло не так',
              message: e,
              type: 'error',
            });
          });
      } else {
        return false;
      }
    });
  };

  return (
    <div>
      <p>Добавить бренд</p>
      <Form ref={formRef} model={form} rules={rules} labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item prop='brand'>
          <Input value={form.brand} type='text' name='brand' onChange={onChange.bind(this, 'brand')}></Input>
        </Form.Item>
        <Form.Item>
          <Button nativeType='submit' type='primary'>
            Добавить бренд
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DialogBrand;
