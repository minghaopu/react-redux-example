import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

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
        <ul>
        {
          items.map((item, idx) =>
            <li key={idx}>
              <h3>
                <Link to={`/${item.owner}/${item.name}`}>{item.name}</Link>
                {' by '}
                <Link to={`/${item.owner}`}>{item.owner}</Link>
              </h3>
              {
                item.description &&
                <p>{item.description}</p>
              }
            </li>
          )
        }
        </ul>
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
