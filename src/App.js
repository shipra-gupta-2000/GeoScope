import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MapView from './Pages/MapView'; 
import Home from './Pages/Home'; 
import Header from './Header';
import Weather from './Pages/Weather';
import './style.css'

export default function App() {
  return (
    <div>
      <Header/>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/mapView" element={<MapView/>} />
        <Route path="/weather" element={<Weather/>} />
      </Routes>
    </Router>
    </div>
  );
}