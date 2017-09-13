// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import { routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import userReducer from './userReducer';
import starReducer from './starReducer';
import uiReducer from './uiReducer';
import routerReducer from './routerReducer'

const rootReducer = combineReducers({
  user: userReducer,
  star: starReducer,
  loading: uiReducer,
  routing: routerReducer
})

export default rootReducer;
