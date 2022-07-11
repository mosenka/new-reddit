import React from 'react';
import styles from './preview.css';

import dfltImages from '@assets/img/default_image.png';


interface IPreviewProps {
  img: string;
}

export function Preview({img} : IPreviewProps) {
   
  return (<div className={styles.preview}>
  <img src={/\.jpg$/.test(img) ? img : dfltImages} alt="" className={styles.previewImg}/>
   
  </div>

  );
}
