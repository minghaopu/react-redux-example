import React from 'react';
import { connect } from 'react-redux';
import Explore from '../../components/Explore';
import { fecthUser } from '../../actions';

const mapStateToProps = state => ({
  username: state.getIn(['user', 'username'])
  // username: state.user.get('username')
});

const mapDispatchToProps = dispatch => ({
  onSubmitClick: username => {
    dispatch(fecthUser(username));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
