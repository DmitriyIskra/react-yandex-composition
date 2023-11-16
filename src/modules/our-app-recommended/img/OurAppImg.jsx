import React from 'react';
import './css/OurAppImg.css';

export default function OurAppImg({item}) {
  return (
    <div className='wr-our-app-img'>
        <img src={item.img} alt={item.alt} />
    </div>
  )
}
