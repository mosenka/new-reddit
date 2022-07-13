import React, { useState } from 'react';
import { AnswerFormControlled } from '../AnswerFormControlled';
import { AnswerFormUnControlled } from '../AnswerFormUnControlled';
import { Break } from '../Break';
import { Button, EBackgroundColor } from '../Button';
import { EColorIcon, EIcons, Icon } from '../Icon';
import { EColor, Text } from '../Text';
import { UserLink } from '../UserLink';
import styles from './comment.css';

interface ICommentProps {
  children?: React.ReactNode;
  userName: string;
}

export function Comment({children, userName}: ICommentProps) {
  const [isShowForm, setIsShowForm] = useState(false);
  

  return (
    <div className={styles.container}>
      <div className={styles.arrowsWrapper}>
        <div className={styles.arrows}>
          <Icon icon={EIcons.arrow} color={EColorIcon.greyD9} height={10} width={19}></Icon>
          <Break top size={10}></Break>
          <Icon icon={EIcons.arrow} color={EColorIcon.greyD9} height={10} width={19} flip></Icon>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.header}>
            <UserLink userIcon='https://cdn.dribbble.com/users/1247975/screenshots/17448576/media/4d16b3412f4fcc0b02559c47f93c6035.jpg?compress=1&resize=320x240&vertical=top' userName={userName} link={'#user_link'} ></UserLink>
            <span className={styles.creates}>1 час назад</span>
            <span className={styles.community}>Лига юристов</span>
          </div>
          <div className={styles.text}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laboriosam veritatis, officiis illo iusto ex nulla deserunt, corrupti, non sapiente facilis exercitationem. Tempore, excepturi temporibus ducimus sapiente dolorum quos perferendis.</div>
          <div className={styles.actions}>
            <div className={styles.reply} onClick={() => setIsShowForm(true)}>
              <Button background={EBackgroundColor.transparent} centered>
                <Icon icon={EIcons.comment} color={EColorIcon.grey99} height={14} width={14}></Icon>
                <Break size={6}></Break>
                <Text size={14} color={EColor.grey99}>Ответить</Text>
              </Button>
            </div>
            <Break size={30}></Break>
            <Button background={EBackgroundColor.transparent} centered>
              <Icon icon={EIcons.share} color={EColorIcon.grey99} height={14} width={12}></Icon>
              <Break size={6}></Break>
              <Text size={14} color={EColor.grey99}>Поделиться</Text>
            </Button>
            <Break size={30}></Break>
            <Button background={EBackgroundColor.transparent} centered>
              <Icon icon={EIcons.error} color={EColorIcon.grey99} height={16} width={14}></Icon>
              <Break size={6}></Break>
              <Text size={14} color={EColor.grey99}>Пожаловаться</Text>
            </Button>
          </div>
          {/* {isShowForm && <AnswerFormControlled userName={userName} setIsShowForm={setIsShowForm}/>} */}
          {isShowForm && <AnswerFormUnControlled userName={userName} />}
        </div>
        {children}
      </div>
    </div>
  );
}
