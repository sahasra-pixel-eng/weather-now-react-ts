import React from 'react';
import type { WeatherData } from '../types';

interface WeatherCardProps {
  data: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data }) => {
  return (
    <div
      style={{
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ marginTop: 0 }}>{data.city}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
          alt={data.description}
          style={{ width: '80px', height: '80px' }}
        />
        <div style={{ fontSize: '48px', fontWeight: 'bold' }}>
          {Math.round(data.temperature)}°C
        </div>
      </div>
      <p style={{ textTransform: 'capitalize', margin: '5px 0' }}>
        {data.description}
      </p>
      <div style={{ marginTop: '15px' }}>
        <p style={{ margin: '5px 0' }}>Humidity: {data.humidity}%</p>
        <p style={{ margin: '5px 0' }}>Wind Speed: {data.windSpeed} m/s</p>
      </div>
    </div>
  );
};

export default WeatherCard;
