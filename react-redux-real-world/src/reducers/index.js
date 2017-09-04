// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import userReducer from './userReducer';
import starReducer from './starReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  user: userReducer,
  star: starReducer,
  loading: uiReducer
})

export default rootReducer;
