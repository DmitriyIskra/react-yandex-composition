import React from 'react';
import './css/SearchRowLogoWr.css';
import SearchLogo from '../logo/SearchLogo';
import SearchRow from '../row/SearchRow';

export default function SearchRowLogoWr({img}) {

  return (
    <div className='SearchRowLogoWr'>
        <SearchLogo img={img}/>
        <SearchRow />
    </div>
  )
}
