import React from 'react';
import { render } from 'react-dom';
import Root from './Root';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import GlobalStyle from './styles/global-styles';
import configureStore from './configureStore';

const store = configureStore();

render(
  <Root store={store}>
    <App />
    <GlobalStyle />
  </Root>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();