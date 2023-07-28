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
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
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
        console.log(time.split(':'))
        const horaNum = parseInt(hora)
        const timeMorning = 6 <= horaNum && horaNum < 10
        const timeDay = 10 <= horaNum && horaNum < 17
        const timeAfterNoon = 17 <= horaNum && horaNum < 20
        const timeNight = 20 <= horaNum && horaNum < 6
        if (timeMorning) {
            console.log('--------------------aaaa----')
            setBackgroundImageTime('url(https://cutewallpaper.org/26/art-wallpaper-gif/u60ye58222-waneella-on-patreon-pixel-art-cool-pixel-art-anime-scenery.gif)')
        } else if (timeDay) {
            console.log('--------')
            setBackgroundImageTime('url(https://thumbs.gfycat.com/UnfoldedRedJaguarundi-max-1mb.gif)')
        } else if (timeAfterNoon) {
            setBackgroundImageTime('url(https://i.pinimg.com/originals/c0/36/28/c03628e7339e0d492cdd077acb6a9e8f.gif)')
        } else if (timeNight) {
            setBackgroundImageTime('url(https://i.pinimg.com/originals/12/b2/3a/12b23a7752e8a7a4464c1ff5e596237f.gif)')
        } else {
            setBackgroundImageTime('url(https://wallpapers.com/images/featured/pixel-art-6jm0bumas1tmb7hc.jpg)')
        }


    }, [time])




    return (
        <div style={{
            backgroundImage: backgroundImageTime,
            fontSynthesis: 'none',
            textRendering: 'optimizeLegibility',
            imageRendering: "pixelated",
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            backgroundPosition: 'center center',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',


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
