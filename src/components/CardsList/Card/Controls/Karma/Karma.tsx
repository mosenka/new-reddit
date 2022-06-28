import React from 'react';
import styles from './karma.css';
import { Button } from '../../../../Button';
import { Icons } from '../../../../Icons';
import arrow from '@assets/icons/arrow.svg';

export function Karma() {
  return ( <div className={styles.karmaCounter}>
    <Button>
      <Icons icon={arrow} height={10} width={19} className={styles.karmaArrow}/>
    </Button>
    <span className={styles.karmaValue}>123</span>
    <Button>
      <Icons icon={arrow} height={10} width={19} className={`${styles.down} ${styles.karmaArrow}`}/>
    </Button>
  </div>
    
  );
}
