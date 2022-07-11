import React from 'react';
import styles from './title.css';

interface ITitleProps {
  text : string;
  url: string;
}



export function Title({text, url}: ITitleProps) {
  return (
    <h2 className={styles.title}>
      <a href={url} className={styles.postLink}>{text}</a>
    </h2>
  );
}
