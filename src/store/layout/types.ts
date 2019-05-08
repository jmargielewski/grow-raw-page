import { Action } from 'redux';

export interface LayoutState {
  resolution: string;
}

export interface InitAction extends Action {
  type: '@@layout/INIT';
  payload: { resolution: string };
}
