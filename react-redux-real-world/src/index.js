import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import App from './containers/App';
import DevTools from './containers/DevTools';
import UserPage from './containers/UserPage';
// import { Router, Route } from 'react-router';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './containers/Root';
import Contact from './components/Contact';
import Home from './components/Home';


const store = configureStore();

// const createSelectLocationState = () => {
//   let prevRoutingState, prevRoutingStateJS;
//   return (state) => {
//     const routingState = state.get('routing'); // or state.routing
//     if (typeof prevRoutingState === 'undefined' || prevRoutingState !== routingState) {
//       prevRoutingState = routingState;
//       prevRoutingStateJS = routingState.toJS();
//     }
//     return prevRoutingStateJS;
//   };
// };
// const history = syncHistoryWithStore(createBrowserHistory(), store, {
//   selectLocationState: createSelectLocationState()
// });
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
        <Route path="/" component={Home} />
        <Route path="/:username" component={UserPage} />
        <Route path="/contact" component={Contact} />
      </App>
    </Router>
    <DevTools key="devtools" />
    </div>
  </Provider>,
  document.getElementById('app')
);
