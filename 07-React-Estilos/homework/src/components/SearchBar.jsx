import React from 'react';
import s from '../estilos/SearchBar.module.css'

export default function SearchBar(props) {
  // acá va tu código
   return (
   <div className={s.searchBar}>
      <input type="text" className={s.input} placeholder="Agregue una ciudad"/>
      <button onClick={() => props.onSearch("Cairns")} className={s.button}>Agregar</button>
   </div>
   )
};