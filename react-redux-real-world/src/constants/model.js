import Immutable from 'immutable';

export const UserState = Immutable.fromJS({
  'username': '',
  'avatar_url': '',
  'name': ''
});

export const StarState = Immutable.fromJS({
  'username': '',
  'starred': []
})

export const UIState = Immutable.fromJS({
  'isFetching': false
})