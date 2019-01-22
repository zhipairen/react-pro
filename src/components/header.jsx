import React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render () {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul>
    );
  }
}
