import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';

function Header() {
  return (
    <header key={0}>
      <ul key={1} className="d-flex">
        <h1 key={2} className="blue-text">Bookstore CMS</h1>
        <Link key={3} to="/book">
          <li key={4} className="link-tag">Books</li>
        </Link>
        <Link key={5} to="/categories">
          <li key={6} className="link-tag">Categories</li>
        </Link>
      </ul>
      <p key={7} className="icon-blue"><FaUserAlt key={8} /></p>
    </header>
  );
}

export default Header;
