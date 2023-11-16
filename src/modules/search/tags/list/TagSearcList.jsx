import React from 'react';
import './css/TagSearcList.css';
import { v4 } from 'uuid';
import TagSearchItem from '../item/TagSearchItem';

export default function TagSearcList({items}) {
  return (
    <ul className='tags-search-list'>
      {items.map( item => <TagSearchItem key={v4()} item = {item}/>)}
    </ul>
  )
} 
