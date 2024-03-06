"use client"
import { usePopup } from '@/store/popup';
import { Button } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const Popup = () => {
  const [store, { closePopup }] = usePopup()

  return (
    <Dialog
      PaperProps={{
        style: {
          backgroundColor: 'white'
        }
      }}
      open={store.isOpen}
      onClose={store.onCancel}
      aria-labelledby={store.title}
      aria-describedby={store.description}
    >
      <DialogTitle id="alert-dialog-title">
        {store.title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {store.description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            store.onCancel()
            closePopup()
          }}
        >
          キャンセル
        </Button>
        <Button
          onClick={() => {
            store.onConfirm()
            closePopup()
          }}
          autoFocus
        >
          確認
        </Button>
      </DialogActions>
    </Dialog >
  );
}

export default Popup