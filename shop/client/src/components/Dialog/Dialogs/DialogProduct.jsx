import React, { useState, useRef } from 'react';
import { Form, Input, Upload, Button, Select, Notification } from 'element-react';
import { useSelector } from 'react-redux';
import { createProduct } from '../../../utils/axios/productAPI';
import '../../../styles/authForm.scss';

const DialogProduct = ({ hideDialog }) => {
  const formRef = useRef();
  const types = useSelector((state) => state.product.types);
  const brands = useSelector((state) => state.product.brands);
  const [imageUrl, setImageUrl] = useState();
  const [info, setInfo] = useState([]);
  const [infoError, setInfoError] = useState(false)
  const [form, setForm] = useState({
    name: '',
    price: '',
    img: null,
    brandId: '',
    typeId: '',
  });

  const rules = {
    typeId: [{ required: true, message: 'Выберите тип', trigger: 'change', type: 'number' }],
    brandId: [{ required: true, message: 'Выберите бренд', trigger: 'change', type: 'number' }],
    name: [{ required: true, message: 'Введите название', trigger: 'blur' }],
    price: [
      { required: true, message: 'Введите цену', trigger: 'blur' },
      {
        validator: (rule, value, callback) => {
          const price = Number(value);
          if (price <= 0 || isNaN(price)) {
            callback(new Error('Введите цену'));
          } else {
            callback();
          }
        },
      },
    ],
    img: [
      { required: true, message: 'Выберите изображение' },
      {
        validator: (rule, value, callback) => {
          console.log('value', value);
          if (imageUrl === '') {
            callback(new Error('Выберите изображение'));
          } else {
            callback();
          }
        },
        trigger: 'click',
      },
    ],
  };

  const onChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const addInfo = (e) => {
    e.preventDefault();
    setInfo([...info, { title: '', description: '', number: Date.now() }]);
  };

  const changeInfo = (key, number, val) => {
    setInfo(info.map((elem) => (elem.number === number ? { ...elem, [key]: val } : elem)));
  };

  const removeInfo = (number) => {
    setInfo(info.filter((elem) => elem.number !== number));
  };

  const selectFile = (file) => {
    setImageUrl(file.name);
    setForm({ ...form, img: file });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i in form) {
      formData.append(i, form[i]);
    }

    if (info.length) {
      setInfoError(false)
      formData.append('info', JSON.stringify(info));
      formRef.current.validate((valid) => {
        if (valid) {
          createProduct(formData).then(() => {
            setForm({
              typeId: null,
              brandId: null,
              name: '',
              price: '',
              img: null,
            });

            setInfo([]);
            hideDialog();
            Notification({
              title: 'Успех',
              message: 'Товар добавлен',
              type: 'success'
            })
          });
        } else {
          Notification({
            title: 'Ошибка',
            message: 'Что-то пошло не так',
            type: 'error'
          })
          return false;
        }
      });
    } else {
      setInfoError(true)
    }
  };
  return (
    <div>
      <p>Добавить товар</p>
      <Form ref={formRef} rules={rules} model={form} labelWidth='120' labelPosition='top' onSubmit={onSubmit.bind(this)}>
        <Form.Item label={'Выберите тип'} prop='typeId'>
          <Select value={form.typeId} name='typeId' placeholder='Выберите тип' onChange={onChange.bind(this, 'typeId')}>
            {types.map((el) => {
              return <Select.Option key={el.id} label={el.name} value={el.id} />;
            })}
          </Select>
        </Form.Item>
        <Form.Item label={'Выберите бренд'} prop='brandId'>
          <Select value={form.brandId} name='brandId' placeholder='Выберите бренд' onChange={onChange.bind(this, 'brandId')}>
            {brands.map((el) => {
              return <Select.Option key={el.id} label={el.name} value={el.id} />;
            })}
          </Select>
        </Form.Item>
        <Form.Item label={'Название'} prop='name'>
          <Input value={form.name} type='text' name='name' onChange={onChange.bind(this, 'name')}></Input>
        </Form.Item>
        <Form.Item label={'Цена'} prop='price'>
          <Input value={form.price} type='text' name='price' onChange={onChange.bind(this, 'price')}></Input>
        </Form.Item>

        <Form.Item label={'Изображение'} prop='img'>
          <Input type='hidden' name='img' value={imageUrl} />
          <Upload multiple={false} action='//jsonplaceholder.typicode.com/posts/' listType='picture-card' beforeUpload={(file) => selectFile(file)}>
            {imageUrl ? <img src={imageUrl} alt={form.name} className='avatar' /> : <i className='el-icon-plus avatar-uploader-icon'></i>}
          </Upload>
        </Form.Item>

        <Form.Item label={'Свойства'}>
          <Button nativeType='submit' type='primary' onClick={addInfo}>
            Добавить свойство
          </Button>
          {infoError ? (<div className='el-form-item__error'>Добавьте свойства</div>):''}
          {info.map((elem) => (
            <div className='inline-input' key={elem.number}>
              <Input value={elem.title} type='text' name='price' placeholder='Название' onChange={changeInfo.bind(this, 'title', elem.number)} />
              <Input value={elem.description} type='text' name='price' placeholder='Значение' onChange={changeInfo.bind(this, 'description', elem.number)} />
              <Button nativeType='button' type='primary' onClick={removeInfo.bind(this, elem.number)}>
                Удалить
              </Button>
            </div>
          ))}
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
