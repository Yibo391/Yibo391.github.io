import React, { useState, useEffect } from 'react';
import './WeatherWidget.css'; // Import custom CSS for animations
import .meta.env.VITE_WEATHER_API_KE
const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    }

    function error() {
      // User denied geolocation, or it's not available; use default location (Frankfurt am Main)
      fetchWeather(50.1109, 8.6821);
    }

    async function fetchWeather(lat, lon) {
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
      }
    }
  }, [apiKey]);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="card mx-auto my-5 animated fadeIn" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Weather in {weather.location.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{weather.location.region}, {weather.location.country}</h6>
        <p className="card-text">
          <strong>Temperature:</strong> {weather.current.temp_c}°C<br/>
          <strong>Condition:</strong> {weather.current.condition.text}<br/>
          <img src={weather.current.condition.icon} alt="weather icon" />
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;
