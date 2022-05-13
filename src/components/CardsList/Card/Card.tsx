import React from 'react';
import styles from './card.css';
import  { Title }  from './Title';
import  { MetaData }  from './MetaData';
import  { Preview }  from './Preview';
import  { Menu }  from './Menu';
import  { Controls }  from './Controls';


export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        < MetaData />
        < Title />
      </div>
      < Preview />
      < Menu />
      < Controls />
    </li>

  );
}
