import React from 'react';
import './css/quotesList.css';
import { v4 } from 'uuid';
import QoutesItem from '../item/QoutesItem';

export default function QuotesList({items}) {
  
  return (
    <div className='wr-quotes'>
        <ul className='quotes-list'>
          {items.map( item => <QoutesItem key={v4()} item={item}/>)}
        </ul>
        <span>...</span>
    </div>
    
  )
}
