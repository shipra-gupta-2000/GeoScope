import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import Geocode from 'react-geocode';
import './map.css';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const MapComponent = ({ city }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API;
  const [center, setCenter] = useState({ lat: 0, lng: 0 });

    useEffect(()=>{
        Geocode.setApiKey(apiKey)
    Geocode.fromAddress(city)
      .then((response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setCenter({ lat, lng });
      })
      .catch((error) => {
        console.log('Error fetching geocode:', error);
      });
    },[city])

  return (
    <div className='mapContainer'>
      <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
      </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
