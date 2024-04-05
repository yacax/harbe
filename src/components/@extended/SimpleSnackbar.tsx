import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSnackbar } from '../../redux/snackbarInfo/snackbarInfoSlice';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { selectSnackbarState } from '../../redux/snackbarInfo/snackbarInfoSelectors';
import { GUI_FEATURES } from '../../utils/config';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => (
  <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
));

Alert.displayName = 'Alert';

const SimpleSnackbar = () => {
  const dispatch = useDispatch();
  const { message: snackbarMessage, severity: snackbarSeverity } =
    useSelector(selectSnackbarState);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (snackbarMessage) {
      setIsOpen(true);
    }
  }, [snackbarMessage]);

  const handleClose = (
    event: React.SyntheticEvent<unknown, Event> | Event,
    reason: SnackbarCloseReason
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setIsOpen(false);
    setTimeout(() => {
      dispatch(clearSnackbar());
    }, 300);
  };

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={GUI_FEATURES.SNACKBAR_AUTO_HIDE_DURATION}
      onClose={handleClose}
    >
      <Alert severity={snackbarSeverity} sx={{ width: '100%' }}>
        {snackbarMessage}
      </Alert>
    </Snackbar>
  );
};

export default SimpleSnackbar;
