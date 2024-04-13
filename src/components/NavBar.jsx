import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the hook
import '../styles/NavBar.css';
import LanguageSwitcher from './LanguageSwitcher'; // Make sure the path is correct

const NavBar = () => {
    const { t } = useTranslation(); // Initialize the translation hook
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{t('home')}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/weather">{t('weather')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/photo">{t('photos')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todo">{t('todoList')}</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/calculator">{t('calculator')}</Link>
              </li>
            </ul>
            <div className="ms-auto">
              <LanguageSwitcher />  {/* Include the LanguageSwitcher in the navbar on the right side */}
            </div>
          </div>
        </div>
      </nav>
    );
};

export default NavBar;
