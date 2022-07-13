import React, { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './cardslist.css';
import  { Card }  from './Card';
import { postsContext } from '../../context/postsContext';




export function CardsList() {
  const posts = useContext(postsContext);


  let list = posts.map(post => {

    const key = uuidv4();
    // console.log(post);
    
    // return <li>test</li>
    
    return <Card title={post.data.title} url={`https://www.reddit.com/${post.data.permalink}`} img={post.data.thumbnail} userIcon={post.data.sr_detail.icon_img} userName={post.data.sr_detail.display_name} link={post.data.sr_detail.url} createdAt={post.data.created} key={key}/>;

  });

  return (<ul className={styles.cardsList}>
    {list}
   
  </ul>

  );
}
