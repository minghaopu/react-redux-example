import fetch from 'isomorphic-fetch'
import {
  SELECT,
  REQUEST,
  GET_DATA_SUCCESS,
  GET_DATA_FAILURE,
} from '../constants';


export const select = (selected) => {
  return {
    type: SELECT,
    selected: selected
  }
};

const request = (selected) => {
  return {
    type: REQUEST,
    selected: selected
  }
};

export const fetchPostsIfNeed = (selected = 'reactjs') => (dispatch, getState) => {
  const state = getState();
  const items = state.get(items);
  const isFecting = state.get(isFecting);
  if (!isFecting || items.size === 0) {
    dispatch(request(selected));
     fetch(`https://www.reddit.com/r/${selected}.json`)
      .then(response => response.json())
      .then(json => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: json.data.children.map(child => child.data.title),
          receiveAt: Date.now()
        })
      })
      .catch(() => dispatch({ type: GET_DATA_FAILURE }));
  }
}