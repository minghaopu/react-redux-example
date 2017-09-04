import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from '../DevTools';
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
        <DevTools key="devtools" />
      </div>
    )
  }
}

App.propTypes = {

}
export default App;
