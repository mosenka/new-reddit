import React from 'react';
import { Icons } from '../../../../Icons';
import styles from './menuitemslist.css';
import hidden from '@assets/icons/hidden.svg'
import error from '@assets/icons/error.svg'
import save from '@assets/icons/save.svg'
import share from '@assets/icons/share.svg'
import comment from '@assets/icons/comment.svg'
import { MenuItem } from '../MenuItem';
import { generateId } from '@utils/js/generateRandomIndex';




const LIST = [
  {name: 'Комментарии', icon: comment, height: 14, width: 12 },
  {name: 'Поделиться', icon: share, height: 14, width: 12 },
  {name: 'Сохранить', icon: save, height: 14, width: 14 },
  {name: 'Скрыть', icon: hidden, height: 14, width: 14 },
  {name: 'Пожаловаться', icon: error, height: 14, width: 16 }
].map(generateId);

export function MenuItemsList() {

  let items = LIST.map(elem => {
    return <MenuItem text={elem.name} key={elem.id}>
      <Icons icon={elem.icon} height={elem.height} width={elem.width} className={styles.menuIcon}/>
      </MenuItem>
  });

  return (<ul className={styles.menuItemsList}>
    {items}
  </ul> 
  );
}


