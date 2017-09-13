import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router, Route } from 'react-router';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import DevTools from '../DevTools';
import App from '../App';
import UserPage from '../UserPage';
import Contact from '../../components/Contact';
import Home from '../../components/Home';

class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        {/* <Router history={history}> */}
          {/* <App> */}
          {/* <Route path="/" component={App}> */}
            {/* <Route path="/:username" component={UserPage}/> */}
          {/* </Route> */}
          {/* </App> */}
        {/* </Router> */}
        <Router history={history}>
          <App>
            <Route path="/" component={Home} />
            <Route path="/minghaopu" component={UserPage} />
            <Route path="/contact" component={Contact} />
          </App>
        </Router>
        <DevTools key="devtools" />
      </div>
    )
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired
}

export default Root;
