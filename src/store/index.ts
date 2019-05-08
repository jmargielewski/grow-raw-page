import { combineReducers, Reducer } from 'redux';

import { LayoutState } from './layout/types';
import layoutReducer from './layout/reducer';

export interface ApplicationState {
  layout: LayoutState;
}

export const reducers: Reducer<ApplicationState> = combineReducers<ApplicationState>({
  layout: layoutReducer,
});
