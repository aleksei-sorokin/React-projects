import React, { useState, useRef } from 'react';
import { Form, Input, Button, Notification } from 'element-react';
import { createType } from '../../../utils/axios/productAPI';

const DialogType = ({ hideDialog }) => {
  const formRef = useRef();
  const rules = {
    type: [{ required: true, message: 'Введите тип', trigger: 'blur' }],
  };

  const [form, setForm] = useState({
    type: '',
  });

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    formRef.current.validate((valid) => {
      if (valid) {
        createType({ name: form.type })
          .then(() => {
            hideDialog();
            setForm({ type: '' });
            hideDialog();
            Notification({
              title: 'Успех',
              message: 'Тип добавлен',
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
      <p>Добавить тип</p>
      <Form ref={formRef} model={form} rules={rules} labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item prop='type'>
          <Input value={form.type} type='text' name='type' onChange={onChange.bind(this, 'type')}></Input>
        </Form.Item>
        <Form.Item>
          <Button nativeType='submit' type='primary'>
            Добавить тип
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DialogType;
