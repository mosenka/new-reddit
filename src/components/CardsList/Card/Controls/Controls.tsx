import React from 'react';
import styles from './controls.css';
import  { Karma }  from './Karma';
import share from '@assets/icons/share.svg'
import save from '@assets/icons/save.svg'
import comment from '@assets/icons/comment.svg'
import { Button, EBackgroundColor } from '../../../Button';
import { EColorIcon, EIcons, Icon } from '../../../Icon';
import { EColor, Text } from '../../../Text';
import { Break } from '../../../Break';



export function Controls() {
  // console.log(save);
  return (
    
    <div className={styles.controls}>
      < Karma />
      <div className={styles.actions}>
        <Button background={EBackgroundColor.transparent} centered> 
          <Icon icon={EIcons.comment} height={14} width={14} color={EColorIcon.greyC4}/>
          <Break size={4}/>
          <Text size={12} color={EColor.greyC4} bold>23</Text>
        </Button>    
        <div className={styles.actionsGroup}>
          <Button background={EBackgroundColor.greyC4} size={20} round centered>
            <Icon icon={EIcons.share} height={10} width={8} color={EColorIcon.white}/>
          </Button>   
          <Button background={EBackgroundColor.greyC4} size={20} round centered>
            <Icon icon={EIcons.save} height={10} width={10} color={EColorIcon.white}/>
          </Button>   
        </div>
      </div>
    </div>

  );
}
