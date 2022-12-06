import React from 'react';
import styles from './card.css';
import  { Title }  from './Title';
import  { MetaData }  from './MetaData';
import  { Preview }  from './Preview';
import  { Menu }  from './Menu';
import  { Controls }  from './Controls';
import { UserLink } from '../../UserLink';


interface ICardProps {
  title: string;
  url: string;
  img: string;
  userIcon: string;
  userName: string;
  link: string;
  createdAt: number;
  id: string;
}


export function Card({title, url, img, userIcon, userName, link, createdAt, id}: ICardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}>
        < MetaData createdAt={createdAt}> 
            <UserLink userIcon={userIcon} userName={userName} link={link} />
          </MetaData>
        < Title text={title} url={url} id={id}/>
      </div>
      < Preview img={img}/>
      < Menu />
      < Controls />
    </li>

  );
}
