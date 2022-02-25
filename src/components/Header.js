import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  return (
    <header>
      <ul className="d-flex">
        <h1 className="blue-text">Bookstore CMS</h1>
        <Link to="/book">
          <li className="link-tag">Books</li>
        </Link>
        <Link to="/categories">
          <li className="link-tag">Categories</li>
        </Link>
      </ul>
      <p className="icon-blue"><FaUserAlt /></p>
    </header>
  );
}

export default Header;
