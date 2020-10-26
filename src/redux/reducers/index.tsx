import { combineReducers } from 'redux';
import ItrSnackBarReducer from './ItrSnackBarReducer';

const rootReducer = combineReducers({
  snackBar: ItrSnackBarReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
