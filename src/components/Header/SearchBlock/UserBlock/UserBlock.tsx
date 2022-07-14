import React from 'react';
import { Break } from '../../../Break';
import { Text, EColor } from '../../../Text';
import { EColorIcon, EIcons, Icon } from '../../../Icon';
import styles from './userblock.css';


interface IUserBlockSrc {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({avatarSrc, username} : IUserBlockSrc) {
  return ( <a 
    href="https://www.reddit.com/api/v1/authorize?client_id=9cWRnDfmAatnHz759osh2g&response_type=token&state=ranom_string&redirect_uri=http://localhost:3000/auth?&scope=read submit identity" 
    className={styles.userBox}>
    <div className={styles.avatarBox}>
      {avatarSrc 
        ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/>
        : <Icon icon={EIcons.anonym} height={50} width={50} color={EColorIcon.greyD9}/>
    
      }
    </div>
    <div className={styles.username}>
      <Break size={12}/>
      <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Аноним'}</Text>
    </div>

  </a>
    // <div className={styles.userBlock}>user block</div>
  );
}
