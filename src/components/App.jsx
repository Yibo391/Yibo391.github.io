import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import WeatherWidget from './WeatherWidget';
import PhotoCarousel from './PhotoCarousel';
import Footer from './Footer';
import TodoList from './TodoList';
import Calculator from './Calculator';
import '../styles/main.css';
import '../i18n';
import Home from './Home';

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
              <Route path="/" element={<Home />} />
              <Route path="/weather" element={<WeatherWidget />} />
              <Route path="/photo" element={<PhotoCarousel />} />
              <Route path="/todo" element={<TodoList />} />
              <Route path="/calculator" element={<Calculator />} />
          </Routes>
      </Layout>
  );
}

export default App;