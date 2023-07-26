import React from 'react'
import pin from '../assets/svg/pin.svg'
import cloud from '../assets/svg/cloud.svg'
import temp from '../assets/svg/temp.svg'
import drop from '../assets/svg/drop.svg'


export const WeatherWidget = ({ dataWeather }) => {

  const getDate = () => {
    let date = new Date()
    return `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`
  }


  return (
    <div>


      <p> <img src={pin} alt="" /> {dataWeather?.name}</p>
      <p> <img src={cloud} alt="" />{dataWeather?.weather[0].description}</p>
      <p> <img src={temp} alt="" />{dataWeather?.main.temp}°C </p>
      <p> <img src={drop} alt="" />{dataWeather?.main.humidity}%</p>
      <p>Date: {getDate()}</p>
     

    </div>
  )
}
//{dataWeather?.weather.description}
//
