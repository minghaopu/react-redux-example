import React, { Component, PropTypes } from 'react';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

class Main extends Component {
  componentWillMount() {
    const { onClickRefresh } = this.props;
    onClickRefresh();
  }
  render() {
    const { selected, lastUpdated, items, isFetching, onChangeSelected, onClickRefresh } = this.props;
    return (
      <div>
        <Picker selected={selected} 
          onChange={onChangeSelected} 
          options={['reactjs', 'frontend']} />
        <p>
          {
            lastUpdated &&
            <span>
              Last updated at { new Date(lastUpdated).toLocaleTimeString() },
              {' '}
            </span>
          }
          {
            !isFetching &&
            <a href="#"
              onClick={onClickRefresh}>
              Refresh
            </a>
          }
        </p>
        {
          isFetching && items.length === 0 && <h2>Loading...</h2>
        }
        {
          !isFetching && items.length === 0 && <h2>Empty.</h2>
        }
        {
          items.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Posts items={items} />
          </div>
        }
      </div>
    )
  }
}

Main.propTypes = {
  selected: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  onChangeSelected: PropTypes.func.isRequired,
  onClickRefresh: PropTypes.func.isRequired
}

export default Main;
