import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router'

class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Router history={history}>
          <Route path="/" component={App}>
            <Route path="/:username" component={UserPage}/>
          </Route>
        </Router>
      </div>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}
export default Root;
