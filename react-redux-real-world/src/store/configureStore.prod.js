import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import Immutable from 'immutable';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import routes from '../components/Routes'

const enhancer = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ routes, createHistory }),
  DevTools.instrument() 
)

const configureStore = (initialState = Immutable.Map()) => {
  return createStore(
    rootReducer,
    enhancer
  )
}

export default configureStore;
