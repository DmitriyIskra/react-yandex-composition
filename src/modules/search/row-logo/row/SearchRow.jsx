import React from 'react';
import './css/SearchRow.css';

export default function SearchRow() {
  return (
    <div className='serach-row-wrapper'>
      <input className='serach-row-input' type="text" />
      <button className='serach-row-button' type='button'>Найти</button>
    </div>
  )
}
