import React from 'react';

import './css/NewsList.css'

import InfoItem from '../item/InfoItem';
import { v4 } from 'uuid';


// список строк для иформационного блока
export default function InfoList({icon, data}) {

  return (
    <ul className="info-list">
        { data.map( item => <InfoItem key={ v4() } icon={icon} data={item} /> ) }
    </ul>
  )
} 
