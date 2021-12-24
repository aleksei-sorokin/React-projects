import React, { useState, useRef } from 'react';
import { Form, Input, Button } from 'element-react';

const DialogType = ({}) => {
  const [type, setType] = useState();
	const formRef = useRef();

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
      <p>Добавить тип</p>
      <Form labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item>
          <Input value={type} type='text' name='type' onChange={e => setType(e)}></Input>
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
