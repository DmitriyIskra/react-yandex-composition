import React from 'react';
import './css/weather.css';

// Погодный информер
export default function Weather({icon, data, children}) {

  return (
    <div className='weather__wrapper'>
        {children}
        <div className="weather__wrapper-info">
            <div className="weather__icon">
                <img src={icon} alt="..." />
            </div>
            <div className="weather__temp">{data.temp}</div>
            <div className="weather__wr-tempMD">
                <span className="weather__tempM">Утром {data.tempMorning},</span>
                <span className="weather__tempD">Днем {data.tempDay}</span>
            </div>
        </div>
    </div>
  )
}
