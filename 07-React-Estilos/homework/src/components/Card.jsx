import React from 'react';
import s from '../estilos/Card.module.css'

export default function Card(props) {
  // acá va tu código
   let back = "";
   if (props.weather === "Drizzle") {
      back = "Drizzle";
   } else if (props.weather === "Clouds") {
      back = "Clouds";
   } else if (props.weather === "Sunny") {
      back = "Sunny";
   }

   return (
   <div className={`${s.card} ${s[back]}`}>
      <h1 className={s.cardTitle}> { props.name}</h1>
      <div className={s.temp_box}>
         <div className={s.temp}>
            <h3 className={s.tempMinMax}>Min</h3>
            <h3 className={s.tempMinMax}>{props.min}</h3>
         </div>
         <div className={s.temp}>
            <h3 className={s.tempMinMax}>Max</h3>
            <h3 className={s.tempMinMax}>{props.max}</h3>
         </div>
      </div>
      <div className={s.botones}>
         <button onClick={props.onClose} className={s.close}><span>Close</span>
         </button>
         <button className={s.close}><span>Details</span>
         </button>
      </div>
   </div>
   );
};