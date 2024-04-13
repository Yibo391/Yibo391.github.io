import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css'; // Update the import path

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Home</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/weather">Weather</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/photo">Photos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/todo">Todo List</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/calculator">Calculator</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
