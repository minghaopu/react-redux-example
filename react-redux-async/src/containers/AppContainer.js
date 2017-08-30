import { connect } from 'react-redux';
import Main from '../../components/Main';
import {
  select,
  fetchPostsIfNeed,
} from '../actions';


const mapStateToProps = state => {
  return {
    selected: state.get('selected'),
    items: state.get('items').toJS(),
    isFetching: state.get('isFetching'),
    lastUpdated: state.get('lastUpdated')
  }
}

const mapDispatchToProps = dispatch => ({
  onChangeSelected: event => {
    dispatch(select(event.target.value));
    dispatch(fetchPostsIfNeed(event.target.value));
  },
  onClickRefresh: selected => {
    dispatch(fetchPostsIfNeed(selected))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
