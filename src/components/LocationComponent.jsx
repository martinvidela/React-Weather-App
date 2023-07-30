import React, { useState } from 'react';
import mariosound from '../audio/mariosound.mp3';


export const LocationComponent = ({ onLocationChange }) => {

    const [location, setLocation] = useState(null)

    const handleGetLocation = () => {
        const audio = new Audio()
        audio.src = mariosound
        audio.volume = 0.02

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const latitude = position.coords.latitude
                const longitude = position.coords.longitude
                setLocation({ latitude, longitude })
                onLocationChange({ latitude, longitude })
            }, error => {
                console.error('Error en la geolocalizacion', error)
            }
            );
        } else {
            console.log('Error with the browser')
        }
        audio.play()
    }
    
    return (
        <div className='locationComponent'>
            <button onClick={handleGetLocation} className='btn'>Get your location!</button>
        </div>
    )
}

