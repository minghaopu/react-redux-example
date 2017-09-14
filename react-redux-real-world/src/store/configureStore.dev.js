import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import DevTools from '../containers/DevTools';
import routes from '../components/Routes'

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
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
