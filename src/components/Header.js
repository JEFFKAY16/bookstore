import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  return (
    <header key={0}>
      <ul key={0} className="d-flex">
        <h1 key={0} className="blue-text">Bookstore CMS</h1>
        <Link key={0}to="/book">
          <li key={0} className="link-tag">Books</li>
        </Link>
        <Link key={0} to="/categories">
          <li key={0} className="link-tag">Categories</li>
        </Link>
      </ul>
      <p key={0} className="icon-blue"><FaUserAlt /></p>
    </header>
  );
}

export default Header;
