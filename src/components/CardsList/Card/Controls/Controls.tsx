import React from 'react';
import styles from './controls.css';
import  { Karma }  from './Karma';
import share from '@assets/icons/share.svg'
import save from '@assets/icons/save.svg'
import comment from '@assets/icons/comment.svg'
import { Button } from '../../../Button';
import { Icons } from '../../../Icons';



export function Controls() {
  return (
    <div className={styles.controls}>
      < Karma />
      <div className={styles.actions}>
        <Button text="33"><Icons icon={comment} height={15} width={15}/></Button>   
        <div className={styles.actionsGroup}>
          <Button className={styles.roundButton}><Icons icon={share} height={10} width={8} className={styles.whiteIcon}/></Button>   
          <Button className={styles.roundButton}><Icons icon={save} height={10} width={10} className={styles.whiteIcon}/></Button>   
        </div>
      </div>
    </div>

  );
}
