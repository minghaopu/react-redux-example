import React, { Component, PropTypes } from 'react';

class Picker extends Component {
  render() {
    const { selected, onChange, options } = this.props;

    return (
      <span>
        <h1>{selected}</h1>
        <select onChange={onChange} value={selected}>
          {
            options.map((option, idx) =>
            <option value={option} key={option}>{option}</option>
            )
          }
        </select>
      </span>
    )
  }
}

Picker.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired
};

export default Picker;
