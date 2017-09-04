import React, { Component } from 'react';
import PropTypes from 'prop-types';

class List extends Component {
  render() {
    const { isFetching, loadingLabel, items } = this.props;
    if (isFetching) {
      return (
        <div className='component-list'>
          <h2>
            {/* <i>{loadingLabel}</i> */}
            <i>Loading...</i>
          </h2>
        </div>
      )
    }
    if (items.length === 0) {
      return (
        <div className='component-list'>
          <h2>
            <i>Nothing here!</i>
          </h2>
        </div>
      )
    }
    return(
      <div className='component-list'>
        {
          items.map((item, idx) => 
            <li key={idx}>
              <span>{item.name}</span>
              <span>{item.owner}</span>
              <span>{item.description}</span>
            </li>
          )
        }
      </div>
    );
  }
}

List.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  // loadingLabel: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired
}

export default List;
