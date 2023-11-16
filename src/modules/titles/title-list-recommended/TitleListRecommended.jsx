import React from 'react';
import './css/title-list-recommended.css';
import { v4 } from 'uuid';
// список ссылк рекомендаций для размещения в заголовке новостей
export default function TitleListRecomended({items}) {

  return (
    <ul className="wr-title-list-recomended">
        {items.map( item => {
            return (
                <li key={ v4() } className='title-list-item'>
                    <a href="#" className="title-list-item-link">{item}</a>
                </li>
            )
        })}
    </ul>
  )
}
