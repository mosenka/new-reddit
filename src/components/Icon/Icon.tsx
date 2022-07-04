import React from 'react';
import styles from './icon.css';
import classNames from 'classnames';
// import BrowserSpriteSymbol from 'svg-sprite-loader';
import error  from '@assets/icons/error.svg';
import save  from '@assets/icons/save.svg';
import hidden from '@assets/icons/hidden.svg';
import share from '@assets/icons/share.svg';
import comment from '@assets/icons/comment.svg';
import arrow from '@assets/icons/arrow.svg';
import menu  from '@assets/icons/menu.svg';



interface BrowserSpriteSymbol {
  id: string;
  viewBox: string;
  content: string;
  node: SVGSymbolElement;
}


type TIconsList = { 'name': string; symbol: BrowserSpriteSymbol}
const iconsList: Array<TIconsList> = [
  { name: 'save', symbol: save  },
  { name: 'error', symbol: save  },
  { name: 'hidden', symbol: hidden  },
  { name: 'share', symbol: share  },
  { name: 'comment', symbol: comment  },
  { name: 'arrow', symbol: arrow  },
  { name: 'menu', symbol: menu  },
];


export enum EIcons {
  save = 'save',
  error = 'error',
  hidden = 'hidden',
  share = 'share',
  comment = 'comment',
  arrow = 'arrow',
  menu = 'menu',
}

export enum EColorIcon {
  orange = 'orange',
  white = 'white',
  grey99 = 'grey99',
  greyC4 = 'greyC4',
}

type THoverColor = 'Orange' | 'Green' | 'Inherit';

export interface IIconsProps {
  icon: EIcons;
  color?: EColorIcon;
  hover?: THoverColor;
  height?: number;
  width?: number;
  flip?: boolean;
}


export function Icon({icon , color = EColorIcon.grey99, hover = 'Inherit', height = 26, width=26, flip = false} : IIconsProps) {

  let [symbol] = iconsList.filter(elem => elem.name == icon );

  const classes = classNames(
    styles[color],
    { [styles[`h${hover}`]] : hover},
    { [styles.flip] : flip }
  );
    
  return (
       <svg viewBox={symbol.symbol.viewBox} height={height} width={width} className={classes}>
        <use xlinkHref={`#${symbol.symbol.id}`} />
      </svg> 
   );
  
}
