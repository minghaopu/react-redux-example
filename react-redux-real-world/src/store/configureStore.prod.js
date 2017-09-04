import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import Immutable from 'immutable';

const configureStore = (initialState = Immutable.Map()) => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  )
}

export default configureStore;
