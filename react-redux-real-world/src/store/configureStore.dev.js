import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import DevTools from '../containers/DevTools';

const enhancer = compose(
  applyMiddleware(thunk, createLogger()),
  DevTools.instrument() 
)

const configureStore = (initialState = Immutable.Map()) => {
  return createStore(
    rootReducer,
    enhancer
  )
}

export default configureStore;
