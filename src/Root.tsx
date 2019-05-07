import React, { FunctionComponent } from 'react';
import { Provider } from 'react-redux';

interface RootProps {
  store: object;
}

const Root: FunctionComponent<RootProps> = ({ children, store }) => (
  <Provider store={store}>{children}</Provider>
);

export default Root;
