import React from 'react';
import styles from './title.css';

export function Title() {
  return (
    <h2 className={styles.title}>
      <a href="#post-url" className={styles.postLink}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tempore nisi laborum nobis illum, magnam molestias fugit exercitationem quidem saepe.</a>
    </h2>
  );
}
