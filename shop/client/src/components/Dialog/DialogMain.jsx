import React from 'react';
import { Dialog } from 'element-react';
import DialogType from './Dialogs/DialogType';
import DialogBrand from './Dialogs/DialogBrand';
import DialogProduct from './Dialogs/DialogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { dialog } from '../../store/slices/dialogSlice';

const DialogMain = () => {
  const dialogVisible = useSelector((state) => state.dialog.dialogShow);
  const dialogName = useSelector((state) => state.dialog.dialogName);
  const dispatch = useDispatch();

	const dialogList = {
		type: DialogType,
		brand: DialogBrand,
		product: DialogProduct
	}

	const DialogShow = dialogList[dialogName];

  const hideDialog = () => {
    dispatch(
      dialog({
        visible: false,
				name: dialogName
      })
    );
  };

  return (
    <Dialog visible={dialogVisible} onCancel={hideDialog}>
      <Dialog.Body>{dialogName ? <DialogShow hideDialog={hideDialog} /> : ''}</Dialog.Body>
    </Dialog>
  );
};

export default DialogMain;
