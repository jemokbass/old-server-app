import React from 'react';
import Link from '@Components/UI/Link/Link';

const Header = () => {
  return (
    <header className="header">
      <ul className="header-list">
        <li>
          <Link to="/add">Add Post</Link>
        </li>
        <li>
          <Link to="/post/1">Open post</Link>
        </li>
        <li>
          <Link>Home</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
