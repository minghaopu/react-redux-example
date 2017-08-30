import { handleActions } from 'redux-actions';
import { AppState } from '../components/model';

import {
  SELECT,
  RECEIVE,
  REQUEST,
  INVALIDATE
} from '../constants';

const selectReducer = handleActions({
  
}, AppState);

export default selectReducer;
