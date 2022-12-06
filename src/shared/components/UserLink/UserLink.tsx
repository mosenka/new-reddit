import React from 'react';
import styles from './userLink.css';
import icon from '@assets/img/default_icon.png';

interface IUserLinkProps {
  userIcon: string;
  userName: string;
  link: string;
}

export function UserLink({userIcon, userName, link} : IUserLinkProps) {
  return (<div className={styles.userLink}>
    <img src={userIcon ? userIcon : icon} alt="avatar" className={styles.avatar} />
    <a href={`https://www.reddit.com${link}`} className={styles.username}>{userName}</a>
  </div>

  );
}
