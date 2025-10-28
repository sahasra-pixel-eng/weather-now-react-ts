import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import { useDebounce } from './hooks/useDebounce';
import type { WeatherData } from './types';

const App: React.FC = () => {
  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const debouncedCity = useDebounce(city, 500);

  useEffect(() => {
    if (!debouncedCity) {
      setWeatherData(null);
      return;
    }

    const fetchWeather = async () => {
      setLoading(true);
      setError('');
      
      try {
        // Note: Replace with your actual API key
        const API_KEY = 'your_api_key_here';
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${debouncedCity}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('City not found');
        }
        
        const data = await response.json();
        setWeatherData({
          city: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          icon: data.weather[0].icon,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch weather data');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [debouncedCity]);

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Weather Now</h1>
      <SearchBar value={city} onChange={setCity} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
