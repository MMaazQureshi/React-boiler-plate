import { Reducer } from 'redux';
import { SnackBarActions, SnackBarActionTypes } from '../actions/ItrSnackBarActions';
import { SnackBarStateProps } from '../../shared/components/SnackBar/SnackBar';
import { initialState } from './initialState';

const ItrSnackBarReducer: Reducer<SnackBarStateProps, SnackBarActions> = (
  state = initialState.snackBar,
  action,
) => {
  switch (action.type) {
    case SnackBarActionTypes.SHOW_SNACK_BAR:
      return { ...state, ...action.data };
    case SnackBarActionTypes.HIDE_SNACK_BAR:
      return { ...state, ...action.data };
    default:
      return state;
  }
};

export default ItrSnackBarReducer;
