import React, { useState } from 'react';
import { Form, Input, Button } from 'element-react';

const DialogProduct = ({}) => {
  const [type, setType] = useState();

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
      <p>Добавить товар</p>
      <Form labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item>
          <Input value={type} type='text' name='type'></Input>
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

export default DialogProduct;
