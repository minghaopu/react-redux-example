import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DevTools from '../DevTools';
import Explore from '../../components/Explore';
import { connect } from 'react-redux';
import { push } from 'redux-router';
import { fecthUser } from '../../actions';

import { Divider  } from 'material-ui';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount() {
    const { username, fecthUser } = this.props;
    if (username && username !== '') fecthUser(username);
  }
  handleChange(nextValue) {
    const { push, fecthUser } = this.props;
    push(`/${nextValue}`);
  }
  componentWillReceiveProps(nextProps) {
    const { username, fecthUser } = nextProps;
    if (username && username !== '') fecthUser(username);
  }
  render() {
    return (
      <div>
        <Explore
          onChange={this.handleChange}
          username={this.props.username} 
          />
        <Divider />
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.node,
  username: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
  fecthUser: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    username: state.router.location.pathname.substring(1),
}};

export default connect(mapStateToProps, { fecthUser, push })(App)
