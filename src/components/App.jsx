import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import WeatherWidget from './WeatherWidget';
import PhotoCarousel from './PhotoCarousel';
import Footer from './Footer';
import '../styles/main.css';

const Layout = ({ children }) => (
  <div className="d-flex flex-column min-vh-100">
    <NavBar />
    <div className="container flex-grow-1">
      {children}
    </div>
    <Footer />
  </div>
);

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<div className="text-center mt-4">
          <h1>Welcome to Our Site</h1>
          <p>Explore the weather conditions and beautiful photos!</p>
        </div>} />
        <Route path="/weather" element={<div className="text-center mt-4">
          <h1 className="app-title mb-4">Live Weather Conditions</h1>
          <WeatherWidget />
        </div>} />
        <Route path="/photo" element={<PhotoCarousel />} />
      </Routes>
    </Layout>
  );
}

export default App;
