import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import DevTools from '../DevTools';
// import UserPage from '../UserPage';
import Explore from '../Explore';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';

// import ListPage from '../ListPage';

class App extends Component {
  handleChange = nextValue => {
    // this.props.history.push(`/${nextValue}`);
    console.log(this.props);
  }
  render() {

    return (
      <div>
        <div>
          <Explore onChange={this.handleChange}/>
          <Link to='/'>Home</Link>
          <Link to='/contact'>Contact</Link>
          <hr />
          {/* <UserPage /> */}
          {/* <ListPage /> */}
          <div>
            {this.props.children}
          </div>
        </div>
        {/* <DevTools key="devtools" /> */}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}



// export default withRouter(App);
export default App;
