import React from 'react';
import styles from './karma.css';
import { Button, EBackgroundColor } from '../../../../Button';
import { EColor, Text } from '../../../../Text';
import { EColorIcon, EIcons, Icon } from '../../../../Icon';

export function Karma() {
  return ( <div className={styles.karmaCounter}>
    <Button background={EBackgroundColor.transparent}>
      <Icon icon={EIcons.arrow} height={10} width={19} color={EColorIcon.greyC4} hover={'Orange'}/>
    </Button>
    <Text size={12} color={EColor.greyC4} mobileSize={14} bold>123</Text>
    <Button background={EBackgroundColor.transparent}>
      <Icon icon={EIcons.arrow} height={10} width={19} color={EColorIcon.greyC4} hover={'Green'} flip/>
    </Button>
  </div>
    
  );
}
