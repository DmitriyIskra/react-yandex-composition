import React from 'react';
import './css/qoutesItem.css';


export default function QoutesItem({item}) {

    return (
        <li className='qoutes-item'>
            <div className='qoutes-item-position'>{item.position}</div>
            <div className='qoutes-item-price'>{item.price}</div>
            <div className='qoutes-item-change'>{item.change}</div>
        </li>
    )
}
