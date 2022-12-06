import classNames from 'classnames';
import React from 'react';
import styles from './menuitem.css';


interface IMenuItemProps {
  children: React.ReactNode;
  mobile?: boolean;
  postId: string;
}

export function MenuItem({children, postId, mobile = false}: IMenuItemProps ) {

  const classes = classNames(
    styles.menuItem,
    { [styles['menuItem_mobile']] : mobile },
  )
  return (
    <li className={classes} onClick={()=> console.log(postId)}>
    {children}
    
  </li>
  );
}

