import { Reducer } from 'redux';
import { LayoutState, InitAction } from './types';

export const initialState: LayoutState = {
  resolution: '',
};

const reducer: Reducer<LayoutState> = (
  state: LayoutState = initialState,
  action
) => {
  switch ((action as InitAction).type) {
    case '@@layout/INIT':
      return { ...state, resolution: action.payload };
    default:
      return state;
  }
};

export default reducer;
