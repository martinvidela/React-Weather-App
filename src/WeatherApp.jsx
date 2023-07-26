import React, { useState } from 'react'
import { LocationComponent } from './components/LocationComponent'
import './styles.css'
import { WeatherWidget } from './components/WeatherWidget'


export const WeatherApp = () => {

    const [dataWeather, setDataWeather] = useState(null)

    const handleLocationChange = ({ latitude, longitude }) => {
        const API_KEY = '369758520e1caf8ef592dd3cd294659b'
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setDataWeather(data)
            })



    }



    return (
        <>
            {/* Localizacion */}
            <LocationComponent onLocationChange={handleLocationChange} />

            {/* Widget */}
                <WeatherWidget
                    key={dataWeather}
                    dataWeather={dataWeather}
                />
        </>
    )
}
