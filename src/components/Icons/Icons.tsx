import React from 'react';
import styles from './icon.css';
// import type SpriteSymbol from 'svg-sprite-loader';
// import icon  from '@assets/icons/save.svg';



interface BrowserSpriteSymbol {
  id: string;
  viewBox: string;
  content: string;
  node: SVGSymbolElement;
}

export interface IIconsProps {
  icon: BrowserSpriteSymbol;
  height: number;
  width: number;
  className?: string;
}

export function Icons({icon, height, width, className} : IIconsProps) {


  return (
    <svg viewBox={icon.viewBox} width={width} height={height} className={className} >
        <use xlinkHref={"#" + icon.id} className={styles.icon}/>
    </svg>);
}
