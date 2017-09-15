import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Explore extends Component {
  // componentWillMount() {
  //   if (this.props.username)
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.username !== this.props.username) {
      this.setInputValue(nextProps.username)
      // const { onSubmitClick } = this.props;
      // onSubmitClick(nextProps.username);
    }
  }
  getInputValue() {
    return this.refs.input.value
  }
  setInputValue(val) {
    this.refs.input.value
  }
  handleClick(e) {
    // const { onSubmitClick } = this.props;
    // onSubmitClick(this.getInputValue());
    this.props.onChange(this.getInputValue());
  }
  render() {
    const { username } = this.props;
    return (
      <div className='component-explore'>
        <input type='text' defaultValue={username} ref='input' />
        <button onClick={::this.handleClick}>Search</button>
      </div>
    )
  }
}

Explore.propTypes = {
  username: PropTypes.string.isRequired,
  // onSubmitClick: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Explore;
