import React from 'react'
import pin from '../assets/svg/pin.svg'
import cloud from '../assets/svg/cloud.svg'
import temp from '../assets/svg/temp.svg'
import drop from '../assets/svg/drop.svg'


export const WeatherWidget = ({ dataWeather, displayLocalTime }) => {

  const getDate = () => {
    let date = new Date()
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  }

  return (
    <div className='widget'>


      <p> <img src={pin} alt="" /><span className='info'>{dataWeather?.name.toUpperCase()}</span></p>
      <p> <img src={cloud} alt="" /><span className="info">{dataWeather?.weather[0].description.toUpperCase()}</span></p>
      <p> <img src={temp} alt="" /><span className="info">{dataWeather?.main.temp}</span></p>
      <p> <img src={drop} alt="" /><span className='info'>{dataWeather?.main.humidity}%</span></p>
      <p>  {getDate()}</p>
      <p> {dataWeather?.dt && displayLocalTime}</p>



    </div>
  )
}
//{dataWeather?.weather.description}
//dataWeather?.dt
