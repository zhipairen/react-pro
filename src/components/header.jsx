import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function Header () {
//   const [count, setCount] = useState(1);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
      </Helmet>
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
      {/*
        <p>count: {count},</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
       */}
    </div>
  );
}
export default Header;
