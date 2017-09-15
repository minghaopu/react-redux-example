import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';


class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
