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

  const backgroundColor = dataWeather && 'wrapper'

  return (
    <div className={backgroundColor}>
      <div className='widget'>
        <p> <img src={dataWeather && pin} alt="" /><span className='info'>{dataWeather?.name.toUpperCase()}</span></p>
        <p> <img src={dataWeather && cloud} alt="" /><span className="info">{dataWeather?.weather[0].description.toUpperCase()}</span></p>
        <p> <img src={dataWeather && temp} alt="" /><span className="info">{dataWeather?.main.temp}</span></p>
        <p> <img src={dataWeather && drop} alt="" /><span className='info'>{dataWeather?.main.humidity}</span></p>
        <p>  {dataWeather && getDate()}</p>
        <p> {dataWeather?.dt && displayLocalTime}</p>
      </div>
    </div>
  )
}
