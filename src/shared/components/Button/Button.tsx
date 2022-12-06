import React from 'react';
import styles from './button.css';
import classNames from 'classnames';


export enum EBackgroundColor {
  white = 'white',
  transparent = 'transparent',
  gray33 = 'gray33',
  greyC4 = 'greyC4',
  grey99 = 'grey99',
  greyD9 = 'greyD9'
}

type TSizes = 30 | 20;

interface IButtonProps {
  children: React.ReactNode;
  round?: boolean;
  centered?: boolean;
  background?: EBackgroundColor;
  size?: TSizes;

}

export function Button({children, round = false, centered = false, background = EBackgroundColor.white, size } : IButtonProps) {
  
  const classes = classNames(
    styles.button,
    { [styles[`s${size}`]]: size },
    styles[background],
    { [styles.round] : round },
    { [styles.centered] : centered }
  );



  return (<button className={classes}>
    {children}
  </button>

  );
}
