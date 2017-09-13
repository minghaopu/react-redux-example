import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, U } from 'react-router';
import { Router, Route } from 'react-router-dom';

import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import DevTools from './components/DevTools'
import configureStore from './store/configureStore';

import App from './components/App';
import Repo from './components/Repo';
import About from './components/About';
import User from './components/User';
import Contact from './components/Contact';
import Home from './components/Home';

const store = configureStore();


const createSelectLocationState = () => {
	let prevRoutingState, prevRoutingStateJS;
	return (state) => {
		const routingState = state.get('routing');
		if (typeof prevRoutingState === 'undefined' || !prevRoutingState.equals(routingState)) {
			prevRoutingState = routingState;
			prevRoutingStateJS = routingState.toJS();
		}
		return prevRoutingStateJS;
	};
};

const history = syncHistoryWithStore(createBrowserHistory(), store, {
  selectLocationState (state) {
      return state.get('routing').toJS();
  }
});

render(
  
  <Provider store={store}>
    <div>
    <Router history={history}>
      <App>
      {/* <Route path="/" component={App}> */}
        <Switch>
          {/* <Route path="/" component={App} /> */}
          {/* <Route exact path="/" component={ Home } /> */}
          <Route path="/repo" component={ Repo } />
          <Route path="/about" component={ About } />
          <Route path="/user" component={ User } />
          <Route path="/contacts" component={ Contact } />
        </Switch>
      {/* </Route> */}
      </App>
    </Router>
    <DevTools />
    </div>
  </Provider>,
  document.getElementById('app')
)