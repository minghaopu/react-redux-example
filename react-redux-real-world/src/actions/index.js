import fetch from 'isomorphic-fetch';
import * as constants from '../constants';

const requestStar = username => ({
  type: constants.STAR_REQUEST,
  username: username
});

const showLoading = () => ({
  type: constants.SHOW_LOADING
});

const hideLoading = () => ({
  type: constants.HIDE_LOADING
})

const fetchStarred = username => (dispatch, getState) => {
  dispatch(showLoading());
  dispatch(requestStar(username));
  fetch(`https://api.github.com/users/${username}/starred`)
  .then(response => response.json())
  .then(json => {
    dispatch(hideLoading());
    dispatch({
      type: constants.STAR_SUCCESS,
      data: json.map(item => ({
        name: item.name,
        owner: item.owner.login,
        description: item.description
      }))
    })
  })
  .catch(error => {
    dispatch(hideLoading());
    dispatch({ type: constants.STAR_FAILURE, error: error});
  });
};

const requestUser = username => ({
  type: constants.USER_REQUEST,
  username: username
});

export const fecthUser = username => (dispatch, getState) => {
  dispatch(requestUser(username));
  fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(json => {
    dispatch({
      type: constants.USER_SUCCESS,
      data: json
    })
    dispatch(fetchStarred(username));
  })
  .catch(error => {
    dispatch({ type: constants.USER_FAILURE, error: error});
  });
};



