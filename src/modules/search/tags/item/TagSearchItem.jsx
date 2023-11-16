import React from 'react';
import './css/TagSearchItem.css';
import { v4 } from 'uuid';

export default function TagSearchItem({item}) {
  return (
    <li key={v4()} className='tag-search-item'><a href="#">{item}</a></li>
  )
} 
