import { handleActions } from 'redux-actions';
import { UserState } from '../constants/model';
import * as constants from '../constants';


const userReducer = handleActions({
  [constants.USER_REQUEST]: (state, { username }) => (
    state.set('username', username)
  ),

  [constants.USER_FAILURE]: (state, { error }) => {
    console.error('user failure', error)
    return state;
  },
  [constants.USER_SUCCESS]: (state, { data }) => (
    state.mergeDeep({
      'username': data.login,
      'avatar_url': data.avatar_url,
      'name': data.name
    })
  )
}, UserState);


export default userReducer;
