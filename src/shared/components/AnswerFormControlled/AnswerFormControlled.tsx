import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import styles from './answerform.css';

interface IAnswerFormControlledProps {
  userName: string;
  setIsShowForm: (arg: boolean) => void; 
  
}

export function AnswerFormControlled({userName, setIsShowForm}: IAnswerFormControlledProps) {
  const [value, setValue] = useState(`${userName}, `);

  const ref = useRef<HTMLTextAreaElement>(null);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(`${event.target.value}`);

  }

  useEffect(() => {
    ref.current?.focus();
  }, [])

  

  return (
    <form className={styles.form}>
      <textarea className={styles.input} value={value} onChange={handleChange} ref={ref}> </textarea>
      <button type="submit" className={styles.button} onClick={() => setIsShowForm(false)}>Ответить</button>
    </form>

  );
}
