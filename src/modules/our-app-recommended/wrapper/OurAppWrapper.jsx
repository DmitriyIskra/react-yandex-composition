import React from 'react';
import './css/OurAppWrapper.css';

export default function OurAppWrWrapper({children}) {
  return (
    <div className='our-app-wrapper'>
        {children}
    </div>
  )
}
