import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { connect } from 'react-redux';
import { RootState } from '../../../redux/reducers';
import { hideSnackBar, HideSnackBarAction } from '../../../redux/actions/ItrSnackBarActions';

export interface SnackBarStateProps {
  vertical: 'top' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

export interface SnackBarComponentProps {}

export interface SnackBarDispatchProps {
  hideSnackBar: (data: SnackBarStateProps) => HideSnackBarAction;
}

export type SnackBarProps = SnackBarStateProps & SnackBarComponentProps & SnackBarDispatchProps;

const Alert = (props: AlertProps) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

const SnackBarComponent = (props: SnackBarProps) => {
  let { vertical, horizontal, open, message, severity, hideSnackBar } = props;
  open = open || false;
  vertical = vertical || 'top';
  horizontal = horizontal || 'center';
  message = message || '';
  severity = props.severity || 'error';

  const handleClose = () => {
    hideSnackBar({ vertical, horizontal, message, severity, open: false });
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        key={`${vertical},${horizontal}`}
        open={open}
        onClose={handleClose}
      >
        <Alert id="app-snackbar-0" onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = ({ snackBar }: RootState): SnackBarStateProps => {
  return snackBar || ({} as SnackBarStateProps);
};

const mapDispatchToProps = { hideSnackBar };

export default connect(mapStateToProps, mapDispatchToProps)(SnackBarComponent);
