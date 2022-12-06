import React, { FormEvent, useEffect, useRef } from 'react';
import styles from './answerformuncontrolled.css';

interface IAnswerFormUnControlledProps {
  userName: string;
}

export function AnswerFormUnControlled({userName} : IAnswerFormUnControlledProps) {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, [])

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(ref.current?.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} defaultValue={`${userName}, `}></textarea>
      <button type="submit" className={styles.button} >Ответить</button>
    </form>
  );
}
