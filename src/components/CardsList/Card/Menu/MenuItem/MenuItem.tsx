import React from 'react';
import styles from './menuitem.css';


interface IMenuItemProps {
  text: string;
  children: React.ReactNode;
}

export function MenuItem({ text, children}: IMenuItemProps ) {
  return (
    <li className={styles.menuItem}>
    {children}
    <span>{text}</span>
  </li>
  );
}

