import React from 'react';
import { Button } from 'element-react';
import { useDispatch } from 'react-redux';
import { dialog } from '../store/slices/dialogSlice';
import DialogMain from '../components/Dialog/DialogMain';

const Admin = () => {
  const dispatch = useDispatch();

  const showDialog = (name) => {
    dispatch(
      dialog({
        visible: true,
        name,
      })
    );
  };

  return (
    <div>
      <Button onClick={() => showDialog('type')}>Добавить тип</Button>
      <Button onClick={() => showDialog('brand')}>Добавить бренд</Button>
      <Button onClick={() => showDialog('product')}>Добавить товар</Button>
			<DialogMain/>
    </div>
  );
};

export default Admin;
