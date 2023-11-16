import React from 'react';
import './css/TitleInfoWrapper.css';

// Обертка для заголовка списка новостей
export default function TitleInfoWrapper({children}) {
  return (
    <div className='wr-title'>
        {children}
    </div>
  )
}
