import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    const { user } = this.props;
    return(
      <div className='component-user'>
        <Link to={`/${user.username}`}> 
            <img src={user.avatar_url} alt={user.username} />
            <h3>
              {user.username} {user.name && <span>{user.name}</span>}
            </h3>
        </Link>
      </div>
    )
  }
}

User.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
}

export default User;
