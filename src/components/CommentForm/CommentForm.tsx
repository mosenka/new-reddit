import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { commentContext } from '../../context/commentContext';
import styles from './commentform.css';

export function CommentForm() {
  const [value, setValue] = useState('')
  // const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);

  }

  return (<form action="" className={styles.form}>
    <textarea className={styles.input} value={value} onChange={handleChange}></textarea>
    <button type='submit' className={styles.button}>Комментировать</button>
  </form>

  );
}


