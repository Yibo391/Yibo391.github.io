import React from 'react';
import '../styles/Footer.css'; // Update the import path

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light text-center animated fadeInUp">
      <div className="container">
        <span className="text-muted">Made by Yibo Wang © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};

export default Footer;
