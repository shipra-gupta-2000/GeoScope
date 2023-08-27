import React ,{useState} from 'react';
import Display from './Display'; // Your map view component
import Search from './Search';
import './weather.css'

export default function App() {
const [city,setCity]=useState('');
  return (
    <div>
      <h1 className='weather-header'>Weather</h1>
      <Search setCity={setCity} />
      {city!==""&& <Display city={city}/>}
    </div>
  );
}