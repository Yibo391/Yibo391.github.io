import React, { useState, useEffect } from 'react';
import '../styles/WeatherWidget.css'; // Correct path to CSS file in styles directory

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, handleError);

    function success(position) {
      const { latitude, longitude } = position.coords;
      fetchWeather(latitude, longitude);
    }

    function handleError() {
      setError('Failed to retrieve your location. Using default location.');
      fetchWeather(50.1109, 8.6821); // Frankfurt as default
    }

    async function fetchWeather(lat, lon) {
      const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error('Network response was not ok.');
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Failed to fetch weather data:", error);
        setError('Failed to load weather data.');
      }
    }
  }, [apiKey]);

  if (error) return <p>{error}</p>;
  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="card mx-auto my-5 animated fadeIn" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">Weather in {weather.location.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{weather.location.region}, {weather.location.country}</h6>
        <p className="card-text">
          <strong>Temperature:</strong> {weather.current.temp_c}°C<br/>
          <strong>Condition:</strong> {weather.current.condition.text}<br/>
          <img src={weather.current.condition.icon.startsWith('//') ? 'https:' + weather.current.condition.icon : weather.current.condition.icon} alt="weather icon" />
        </p>
      </div>
    </div>
  );
};

export default WeatherWidget;
