import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, updateComment } from '../../store/reducer';
import styles from './commentform.css';


interface ICommentFormProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function CommentForm({value, onChange } : ICommentFormProps) {
 

  return (<form action="" className={styles.form}>
    <textarea className={styles.input} value={value} onChange={onChange}></textarea>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>

  );
}


