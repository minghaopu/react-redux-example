import { handleActions } from 'redux-actions';
import { AppState } from '../constants/model';

import {
  SELECT,
  REQUEST,
  GET_DATA_FAILURE,
  GET_DATA_SUCCESS
} from '../constants';

const rootReducer = handleActions({
  SELECT: (state, { selected }) => (
    state.set('selected', selected)
  ),

  REQUEST: state => (
    state.set('isFetching', true)
  ),

  GET_DATA_FAILURE: state => {
    console.error('')
    state.set('isFetching', false)
    return state;
  },
  GET_DATA_SUCCESS: (state, { data, receiveAt }) => (
    state.merge({
      'items': data,
      'isFetching': false,
      'lastUpdated': receiveAt
    })
  )
}, AppState);

export default rootReducer;
