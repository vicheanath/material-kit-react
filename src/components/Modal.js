import React from 'react';
import {
  Typography, DialogActions, DialogContent, Dialog, IconButton, Button
} from '@material-ui/core';
import { withStyles} from '@material-ui/styles'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal} from 'src/store/actions/uiActiuons';
const styles = theme => ({
  root: {
    margin: 0,
    padding: 10,
  },
  closeButton: {
    position: 'absolute',
    right: 5,
    top: 5,
    color: '#333',
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle style={{ display: "flex",justifyContent:"space-between" }} disableTypography className={classes.root} {...other}>
      <Typography style={{display:"inline-block"}} variant="h4">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});



export default function MaxWidthDialog({ title, children }) {
  const dispatch = useDispatch()
  const open = useSelector(state => state.ui.modal)

  return (
    <Dialog
      fullWidth={'true'}
      maxWidth={'md'}
      open={open}
      onClose={() => dispatch(closeModal)}
      aria-labelledby="max-width-dialog-title"
    >
      <DialogTitle onClose={() => dispatch(closeModal())}>
        {title}
      </DialogTitle>
      <DialogContent style={{paddingTop:15}}>
        {children}
      </DialogContent>
      
    </Dialog>
  );
}
