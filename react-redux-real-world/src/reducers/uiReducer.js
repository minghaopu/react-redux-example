import { handleActions } from 'redux-actions';
import { UIState } from '../constants/model';
import * as constants from '../constants';

const uiReducer = handleActions({
  [constants.HIDE_LOADING]: state => (
    state.set('isFetching', false)
  ),
  [constants.SHOW_LOADING]: state => (
    state.set('isFetching', true)
  )
}, UIState);

export default uiReducer;
