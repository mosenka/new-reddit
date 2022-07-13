import React, { useState } from 'react';
import { Post } from '../../../Post';
import styles from './title.css';

interface ITitleProps {
  text : string;
  url: string;
}



export function Title({text, url}: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);


  return (
    <h2 className={styles.title}>
      <button className={styles.postLink} onClick={()=> setIsModalOpened(!isModalOpened)}>{text}</button>
      {isModalOpened && (
        <Post onClose={()=> setIsModalOpened(false)}/>
      )}

    </h2>
  );
}
