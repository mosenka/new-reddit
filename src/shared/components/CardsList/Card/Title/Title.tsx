import React from 'react';
import { Link } from 'react-router-dom';
import styles from './title.css';

interface ITitleProps {
  text : string;
  url: string;
  id: string;
}



export function Title({text, url, id }: ITitleProps) {
  // const [isModalOpened, setIsModalOpened] = useState(false);


  return (
    <h2 className={styles.title}>
      <Link to={`/posts/${id}`} className={styles.postLink}>{text}</Link>
      {/* <button className={styles.postLink} onClick={()=> setIsModalOpened(!isModalOpened)}>{text}</button> */}
      {/* {isModalOpened && (
        <Post onClose={()=> setIsModalOpened(false)}/>
      )} */}

    </h2>
  );
}
