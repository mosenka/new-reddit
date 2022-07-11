import React from 'react';
import styles from './metadata.css';


interface IMetaDataProps {
  children: React.ReactNode;
  createdAt: number;
}


export function MetaData( {children, createdAt} : IMetaDataProps) {
  let time = getPeriodTime(createdAt);
  
  return (<div className={styles.metaData}>
    { children }
    <span className={styles.createdAt}><span className={styles.publishedLabel}>опубликовано </span>{time} часов назад</span>
  </div>

  );
}


function getPeriodTime(time: number): number{
  let now = new Date();
  let test = (now.getTime() - time * 1000) / 3600000;
  return Math.floor(test);

}