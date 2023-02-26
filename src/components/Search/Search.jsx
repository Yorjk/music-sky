import s from './Search.module.css';
import React from 'react';
import { ReactComponent as SearchIcon } from './img/search.svg';


export const Search = () => {
   return (
      <div className={`${s.centerblock__search} ${s.search}`}>
         <svg className={s.search__svg}>
            <SearchIcon />
         </svg>
         <input className={s.search__text} type="search" placeholder="Поиск" name="search" />
      </div>
   )
}