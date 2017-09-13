import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import User from '../../components/User';
import List from '../../components/List';

class UserPage extends Component {
  render() {
    
    const { user, isFetching, items } = this.props;
    return (
      <div className='UserPage'>
        <User user={user} />
        <hr />
        <List items={items} isFetching={isFetching} />
      </div>
    )
  }
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
}

const mapStateToProps = state => ({
  user: state.get('user').toJS(),
  isFetching: state.getIn(['loading', 'isFetching']),
  items: state.getIn(['star', 'starred']).toJS()
});

export default connect(
  mapStateToProps
)(UserPage);

// const mapStateToProps = state => ({
//   user: state.get('user').toJS(),
//   isFetching: state.getIn(['loading', 'isFetching'])
// });

// export default connect(
//   mapStateToProps
// )(User);