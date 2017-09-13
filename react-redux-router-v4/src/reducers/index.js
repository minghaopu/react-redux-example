// import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
// import { routerReducer as routing } from 'react-router-redux';
import routerReducer from './routerReducer';

const rootReducer = combineReducers({
  routing: routerReducer
});

export default rootReducer;