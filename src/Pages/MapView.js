import React ,{useState} from 'react';
import MapComponent from './Map'
import Search from './Search';
import './MapView.css'

export default function MapView(){
    const [city,setCity]=useState('');
    return(
        <div>
        <h1 className='map-header'>MapView</h1>
        <Search setCity={setCity}/>
        {
            city!==''&&<MapComponent city={city}/>
        }
        </div>
    )
}