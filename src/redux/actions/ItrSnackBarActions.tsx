import { SnackBarStateProps } from '../../shared/components/SnackBar/SnackBar';

export enum SnackBarActionTypes {
  SHOW_SNACK_BAR = 'SHOW_SNACK_BAR',
  HIDE_SNACK_BAR = 'HIDE_SNACK_BAR',
}

export interface SnackBarAction {
  type: SnackBarActionTypes;
}

export interface ShowSnackBarAction {
  type: SnackBarActionTypes.SHOW_SNACK_BAR;
  data: SnackBarStateProps;
}

export interface HideSnackBarAction {
  type: SnackBarActionTypes.HIDE_SNACK_BAR;
  data: SnackBarStateProps;
}

export type SnackBarActions = ShowSnackBarAction | HideSnackBarAction;

export const showSnackBar = (data: SnackBarStateProps): ShowSnackBarAction => {
  return {
    type: SnackBarActionTypes.SHOW_SNACK_BAR,
    data,
  };
};

export const hideSnackBar = (data: SnackBarStateProps): HideSnackBarAction => {
  return {
    type: SnackBarActionTypes.HIDE_SNACK_BAR,
    data,
  };
};
