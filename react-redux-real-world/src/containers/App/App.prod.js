import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserPage from '../UserPage';
import Explore from '../Explore';
import ListPage from '../ListPage';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Explore />
          <hr />
          <UserPage />
          <ListPage />
        </div>
      </div>
    )
  }
}

App.propTypes = {

}
export default App;
