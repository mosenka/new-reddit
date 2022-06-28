import React from 'react';
import styles from './button.css';
// import { Icons } from './components/Icons';
// import save from '@assets/icons/save.svg';

interface IButtonProps {
  children: React.ReactNode;
  text?: string;
  className?: string;
  // icon: React.ReactNode;
  // icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  

}

export function Button({children, text, className} : IButtonProps) {
  // let icon = 'share';
  return (<button className={`${styles.button} ${className ? className : ""}`}>
    {children}
    {text ? <span className={styles.buttonText}>{text}</span> : '' }
  </button>

  );
}
