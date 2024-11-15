// src/components/Header.js
import React from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">Yibo Wang</h1>
      <nav className="nav">
        <Link to="introduction" smooth={true} duration={500}>Introduction</Link>
        <Link to="projects" smooth={true} duration={500}>Projects</Link>
        <Link to="contact" smooth={true} duration={500}>Contact</Link>
        <Link to="hobbies" smooth={true} duration={500}>Hobbies</Link>
      </nav>
    </header>
  );
};

export default Header;
