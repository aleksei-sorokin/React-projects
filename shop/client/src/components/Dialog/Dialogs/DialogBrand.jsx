import React, { useState } from 'react';
import { Form, Input, Button } from 'element-react';

const DialogBrand = ({}) => {
  const [brand, setBrand] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    // formRef.current.validate((valid) => {
    //   if (valid) {
    //     authFunc();
    //   } else {
    //     console.log('error submit!!');
    //     return false;
    //   }
    // });
  };
  return (
    <div>
      <p>Добавить бренд</p>
      <Form labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item>
          <Input value={brand} type='text' name='type' onChange={(e) => setBrand(e)}></Input>
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
