import React from 'react';
import './css/SearchExample.css';

export default function SearchExample({text}) {
  return (
    <div className='wr-example'>
        <span className='example-text-static'>Найдется всё. Например, </span>
        <span className='example-text-dinamic'><a href="#">{text}</a></span>
    </div>
  )
}
