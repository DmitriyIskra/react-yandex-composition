import React from 'react';
import './css/newsItem.css';
import { v4 } from 'uuid';

// строка для информационного блока
export default function InfoItem({icon, data}) {
  console.log(icon)
  return (
    <li className="info-list-item">
        {icon && <div className="info-list-item-icon"><img src={icon} alt="" /></div>}
        <a href={data.link} className="info-list-item-link">{data.linkText}</a>
        {data.channel && <span className="info-list-item-channel">{data.channel}</span>}
    </li>
  )
} 
