import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header () {
//   const [count, setCount] = useState(1);
  return (
    <div>
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
      {/* <div>
        <p>count: {count},</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div> */}
    </div>
  );
}
export default Header;
