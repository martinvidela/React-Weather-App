import React, { useEffect, useState } from 'react'
import { LocationComponent } from './components/LocationComponent'
import './styles.css'
import { WeatherWidget } from './components/WeatherWidget'

export const WeatherApp = () => {

    const [dataWeather, setDataWeather] = useState(null)
    const [backgroundImageTime, setBackgroundImageTime] = useState('')
    const [time, setTime] = useState('')

    const handleLocationChange = ({ latitude, longitude }) => {
        const API_KEY = '369758520e1caf8ef592dd3cd294659b'
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                setDataWeather(data)
            })
    }

    const displayLocalTime = () => {
        const date = new Date(dataWeather?.dt * 1000)
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        setTime(formattedTime)
    }

    useEffect(() => {
        displayLocalTime()

    }, [dataWeather])

    useEffect(() => {
        const [hora, minutos] = time.split(':')
        const horaNum = parseInt(hora)
        const timeMorning = 6 <= horaNum && horaNum < 10
        const timeDay = 10 <= horaNum && horaNum < 17
        const timeAfterNoon = 17 <= horaNum && horaNum < 20
        if (timeMorning) {
            setBackgroundImageTime('url(https://cutewallpaper.org/26/art-wallpaper-gif/u60ye58222-waneella-on-patreon-pixel-art-cool-pixel-art-anime-scenery.gif)')
        } else if (timeDay) {
            setBackgroundImageTime('url(https://i.pinimg.com/originals/c4/1a/75/c41a75767e2741bb005f96b4b6895898.gif)')
        } else if (timeAfterNoon) {
            setBackgroundImageTime('url(https://i.pinimg.com/originals/c0/36/28/c03628e7339e0d492cdd077acb6a9e8f.gif)')
        } else {
            setBackgroundImageTime('url(https://cdna.artstation.com/p/assets/images/images/036/822/576/original/karina-formanova-cover-final.gif?1618727960)')
        }


    }, [time])




    return (
        <div className='weatherApp' style={{
            backgroundImage: backgroundImageTime,
        }}>
            {/* Localizacion */}
            <LocationComponent onLocationChange={handleLocationChange} />

            {/* Widget */}
            <WeatherWidget
                displayLocalTime={time}
                key={dataWeather}
                dataWeather={dataWeather}
            />
        </div>
    )
}
