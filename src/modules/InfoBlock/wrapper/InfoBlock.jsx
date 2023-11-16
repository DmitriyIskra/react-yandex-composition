import React from 'react';
import './css/InfoBlock.css'

// Обертка для информационного блока
// будет в себя включать заголовок различных вариаций
// и информационный список со ссылками
export default function InfoBlock({children}) {
  return (
    <div className='wr-info'>
        {children}
    </div>
  )
}
