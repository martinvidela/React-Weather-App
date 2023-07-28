import React, { useState } from 'react'

export const LocationComponent = ({ onLocationChange }) => {
    const [location, setLocation] = useState(null)

    const handleGetLocation = () => {
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

    }



    return (
        <div className='locationComponent'>

            <button onClick={handleGetLocation} className='btn'>Get your location!</button>
        </div>
    )
}

