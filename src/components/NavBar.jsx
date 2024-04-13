import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/NavBar.css';
import LanguageSwitcher from './LanguageSwitcher';

const NavBar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);  // State to manage the collapse

    const toggle = () => setIsOpen(!isOpen); // Toggle the state

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" onClick={toggle} aria-controls="navbarNav" aria-expanded={isOpen} aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>{t('home')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/weather" onClick={() => setIsOpen(false)}>{t('weather')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photo" onClick={() => setIsOpen(false)}>{t('photos')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo" onClick={() => setIsOpen(false)}>{t('todoList')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calculator" onClick={() => setIsOpen(false)}>{t('calculator')}</Link>
              </li>
            </ul>
          </div>
          <div className="ms-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
