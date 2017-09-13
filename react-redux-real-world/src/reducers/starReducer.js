import { handleActions } from 'redux-actions';
import { StarState } from '../constants/model';
import * as constants from '../constants';

const starReducer = handleActions({
  [constants.STAR_REQUEST]: (state, { username }) => (
    state.merge({
      'username': username,
      'starred': []
    })
  ),

  [constants.STAR_FAILURE]: (state, { error }) => {
    // console.error(error);
    return state;
  },
  [constants.STAR_SUCCESS]: (state, { data }) => (
    state.merge({'starred': data})
  )
}, StarState);

export default starReducer;
