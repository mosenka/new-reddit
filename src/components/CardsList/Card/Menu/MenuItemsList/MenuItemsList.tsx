import React from 'react';
import { Icon, EIcons, EColorIcon } from '../../../../Icon';
import { EColor, Text } from '../../../../Text';
import styles from './menuitemslist.css';
import { MenuItem } from '../MenuItem';
import { generateId } from '@utils/js/generateRandomIndex';
import { Break } from '../../../../Break';


interface IMenuItem {
  'name': string;
  'icon': EIcons;
  'height': number;  
  'width': number;
  'mobile' : boolean; 
  'id': string;  
}


const LIST: Array<IMenuItem> = [
  {name: 'Комментарии', icon: EIcons.comment, height: 14, width: 12, mobile: false },
  {name: 'Поделиться', icon: EIcons.share, height: 14, width: 12, mobile: false },
  {name: 'Сохранить', icon: EIcons.save, height: 14, width: 14, mobile: false },
  {name: 'Скрыть', icon: EIcons.hidden, height: 14, width: 14, mobile: true },
  {name: 'Пожаловаться', icon: EIcons.error, height: 14, width: 16, mobile: true }
].map(generateId);

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({postId}: IMenuItemsListProps) {

  let items = LIST.map(elem => <MenuItem key={elem.id} mobile={elem.mobile} postId={postId}>
    <Icon icon={elem.icon} height={elem.height} width={elem.width} color={EColorIcon.grey99} />
    <Break size={6}/>
    <Text size={12} color={EColor.grey99}>{elem.name}</Text>
  </MenuItem>);



  return (<ul className={styles.menuItemsList}>
    {items}
  </ul> 
  );
}


