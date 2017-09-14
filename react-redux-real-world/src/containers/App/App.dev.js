import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from '../DevTools';
// import UserPage from '../UserPage';
import Explore from '../Explore';
import { connect } from 'react-redux';
import { push } from 'redux-router';
// import { Link,  } from 'react-router-dom';
// import ListPage from '../ListPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = nextValue => {
    console.log(this)
    this.props.push(`/${nextValue}`);
  }
  render() {
    return (
      <div>
        <div>
          <Explore onChange={this.handleChange}/>
          {/* <Link to="/test/home">Home</Link>
          <Link to="/test/contact">contact</Link> */}
          <hr />
          <div>
            {this.props.children}
          </div>
        </div>
        <DevTools key="devtools" />
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node
}

const mapStateToProps = state => ({
  inputValue: state.router.location.pathname.substring(1)
});


// export default connect(mapStateToProps, {pushState})(App)

// function mapStateToProps(state) {
//   return {
//     inputValue: state.router.location.pathname.substring(1)
//   }
// }

export default connect(mapStateToProps, {push})(App)
