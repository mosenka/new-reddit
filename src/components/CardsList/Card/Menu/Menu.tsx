import React from 'react';
import styles from './menu.css';

import { Button, EBackgroundColor } from '../../../Button';
import { EColorIcon, EIcons, Icon } from '../../../Icon';
import { Dropdown } from '../../../Dropdown';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return ( <div className={styles.menu}>
    <Dropdown 
      button={ <div className={styles.menuButton}><Button background={EBackgroundColor.white} round centered size={30} >
          <Icon width={5} height={20} icon={EIcons.menu} color={EColorIcon.grey99}></Icon> 
        </Button></div>  }>
        <div className={styles.dropdown}>
          < MenuItemsList postId='123'/>
          <button className={styles.closeButton}>Закрыть</button>

        </div>
      
    </Dropdown>
    {/* <button className={styles.menuButton}>
      <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
          <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
      </svg>
    </button>
    <div className={styles.dropdown}>
      < MenuItemsList />
      <button className={styles.closeButton}>Закрыть</button>
    </div> */}
  </div>

  );
}
