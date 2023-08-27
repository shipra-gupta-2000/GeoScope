import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './display.css'; 

export default function Display({city}) {
  const [response, setResponse] = useState({});
  const apiKey=process.env.REACT_APP_Weather_API;
  console.log('shipra',apiKey)
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: `${city},India` },
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
  
      try {
        const data = await axios.request(options);
        setResponse(data.data.current);
        console.log(data.data);
      } catch (error) {
        setResponse({});
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, [city]);

  return (
    <>
    <div className="display-container">
      <h1 className="city-name">{city}</h1>
      {Object.keys(response).length !== 0 && (
        <div className="weather-details">
          <p className="weather-info">
            Temperature: {response.temp_c}°C / {response.temp_f}°F
          </p>
          <p className="weather-info">
            Humidity: {response.humidity}%
          </p>
          <p className="weather-info">
            Wind: {response.wind_kph} kph
          </p>
          <p className="weather-info">
            Visibility: {response.vis_km} km
          </p>
        </div>
      )}
    </div>
    </>
  );
}
