import React from 'react';
import './css/title-date.css';

// Дата для размещения в заголвке списка новостей
export default function TitleDate({date}) {
  return (
    <div className='title-date'>{date}</div>
  )
}
