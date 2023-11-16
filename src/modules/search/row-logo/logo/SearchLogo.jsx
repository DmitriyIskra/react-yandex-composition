import React from 'react';
import './css/SearchLogo.css';

export default function SearchLogo({img}) {
  return (
    <div className='wrapper-search-logo'>
        <img src={img} alt="..." />
    </div>
  )
}
