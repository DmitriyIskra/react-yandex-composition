import React from 'react';
import './css/TitleMain.css';

// Основной заголовок для списка новостей
export default function TitleMain({text}) {
  return (
    <h2 className='title-main'>{text}</h2>
  )
}
