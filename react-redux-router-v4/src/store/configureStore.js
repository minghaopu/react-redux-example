import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers';
import Immutable from 'immutable';
import DevTools from '../components/DevTools';

const enhencer = compose(
  applyMiddleware(createLogger()),
  DevTools.instrument()
);

const configureStore = initialState => {
  return createStore(
    rootReducer,
    enhencer
  )
}

export default configureStore;