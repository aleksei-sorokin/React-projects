import React, { useState } from 'react';
import { Form, Input, Upload, Button, Dialog, Select } from 'element-react';
import { useSelector} from 'react-redux';

const DialogProduct = ({ hideDialog }) => {
  const types = useSelector((state) => state.product.types);
  const brands = useSelector((state) => state.product.brands);
  const [dialogImageUrl, setDialogImageUrl] = useState();
  const [dialogVisible, setDialogVisible] = useState(false);
  const [form, setForm] = useState({
    name: '',
    price: 0,
    file: null,
    brand: '',
    type: '',
  });

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
    console.log('val', value);
    console.log('form', form);
  };

  const selectFile = (file) => {
    setDialogImageUrl(file.url)
    setDialogVisible(true)
    setForm({ ...form, file: 'qwe' });
  };

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
        <Form.Item label={'Выберите тип'}>
          <Select value={form.type}>
            {types.map((el) => {
              return <Select.Option key={el.id} label={el.name} value={el.id} />;
            })}
          </Select>
        </Form.Item>
        <Form.Item label={'Выберите бренд'}>
          <Select value={form.type}>
            {brands.map((el) => {
              return <Select.Option key={el.id} label={el.name} value={el.id} />;
            })}
          </Select>
        </Form.Item>
        <Form.Item label={'Название'}>
          <Input value={form.name} type='text' name='name' onChange={onChange.bind(this, 'name')}></Input>
        </Form.Item>
        <Form.Item label={'Цена'}>
          <Input value={form.price} type='number' name='price' onChange={onChange.bind(this, 'price')}></Input>
        </Form.Item>
        <Form.Item label={'Рейтинг'}>
          <Input value={form.rating} type='text' name='rating' onChange={onChange.bind(this, 'rating')}></Input>
        </Form.Item>
        <Form.Item label={'Изображение'}>
          <Upload action='//jsonplaceholder.typicode.com/posts/' listType='picture-card' onPreview={(file) => selectFile(file)} />
          <Dialog visible={dialogVisible} size='tiny' onCancel={() => setDialogVisible(false)}>
            <img width='100%' src={dialogImageUrl} alt='' />
          </Dialog>
        </Form.Item>
        <Form.Item>
          <Button nativeType='submit' type='primary'>
            Добавить товар
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DialogProduct;
