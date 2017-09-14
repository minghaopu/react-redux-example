// import { combineReducers } from 'redux-immutable';
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import starReducer from './starReducer';
import uiReducer from './uiReducer';
// import routerReducer from './routerReducer'
import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  user: userReducer,
  star: starReducer,
  loading: uiReducer,
  router
})

export default rootReducer;
