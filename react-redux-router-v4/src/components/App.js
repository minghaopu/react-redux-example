import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class App extends Component {
  render() {
    const links = ['repo', 'user', 'contacts', 'about'];
    return (
      <div>
        <h1>APP</h1>
        <ul>
          {
            links.map(item => {
              return (
                <li key={item}>
                  <NavLink to={`/${item}`}>{item}</NavLink>
                </li>
              )
            })
          }
          {/* <li><NavLink to="/contacts">Contacts</NavLink></li> */}
        </ul>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  return state;
};

export default App;