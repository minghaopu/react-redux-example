import React from 'react';
import { render } from 'react-dom';
import { ReduxRouter } from 'redux-router';
import { MuiThemeProvider } from 'material-ui/styles';
import configureStore from './store/configureStore';

import Root from './containers/Root'

const store = configureStore();

render(
  <MuiThemeProvider>
    <Root store={store} />
  </MuiThemeProvider>,
  document.getElementById('app')
);
