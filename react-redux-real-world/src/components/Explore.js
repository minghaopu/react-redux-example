import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatButton, TextField } from 'material-ui';

import { AppBar, Divider, IconButton,  } from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: props.username
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      this.setState({
        input: nextProps.username
      })
    }
  }
  handleChange(e) {
    this.setState({
      input: e.target.value
    })
  }
  handleClick(e) {
    this.props.onChange(this.state.input);
  }
  render() {
    const { username, loading } = this.props;
    return (
      <div className='component-explore'>
        

        <AppBar 
          title='Git Finder'
          iconElementRight={
            <div className="appBarIcons">
              <TextField 
                onChange={this.handleChange}
                value={this.state.input}
                hintText='Search Username'
                ref = 'input'
              />
              <IconButton onClick={this.handleClick}>
                <ActionSearch />
              </IconButton>
            </div>
          }
          showMenuIconButton={false} />
      </div>
    )
  }
}

Explore.propTypes = {
  username: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Explore;
