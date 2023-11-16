import React from 'react';
import './css/banner.css';


export default function Banner({img}) {
  return (
    <img className='banner-img' src={img} />
  )
}
