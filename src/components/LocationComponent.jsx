import React, { useState } from 'react'

export const LocationComponent = ({ onLocationChange }) => {
    const [location, setLocation] = useState(null)

    const handleGetLocation = (evt) => {
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
        <div>

            <button onClick={handleGetLocation} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Get location!</button>

            {
                location && (<p> Here's your location: {location.latitude}, {location.longitude} </p>)
            }

        </div>
    )
}

