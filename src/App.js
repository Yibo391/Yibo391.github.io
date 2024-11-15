// src/App.js
import React from 'react';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Introduction Section */}
      <section id="introduction">
        <h2>Introduction</h2>
        <p>Your introduction content here.</p>
      </section>
      
      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <p>Your projects content here.</p>
      </section>
      
      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Your contact content here.</p>
      </section>
      
      {/* Hobbies Section */}
      <section id="hobbies">
        <h2>Hobbies</h2>
        <p>Your hobbies content here.</p>
      </section>
      
      {/* Footer */}
      <footer>
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
