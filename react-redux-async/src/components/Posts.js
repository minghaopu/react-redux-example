import React, { Component, PropTypes } from 'react';

class Posts extends Component {
  render() {
    return (
      <ul>
        {
          this.props.items.map((title, idx) => 
            <li key={idx}>{title}</li>
          )
        }
      </ul>
    )
  }
}

Posts.propTypes = {
  items: PropTypes.array.isRequired
}

export default Posts;
