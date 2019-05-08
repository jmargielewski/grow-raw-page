import { ActionCreator } from 'redux';
import { InitAction } from './types';

export const initAction: ActionCreator<InitAction> = (resolution: string) => ({
  type: '@@layout/INIT',
  payload: { resolution },
});
