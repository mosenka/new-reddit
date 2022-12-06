import React, {useState} from 'react';
import styles from './formcomment.css';
import {createStore, StoreProvider, action, Action, useStoreState, useStoreActions, State, Actions} from 'easy-peasy';
import store from '../../store/storeEasy';

import { ICommentModel } from '../../store/model';



export function FormComment() {
    const value = useStoreState((state : State<ICommentModel>) => state.comment);
    const addComment = useStoreActions((actions: Actions<ICommentModel>) => actions.addComment);

    const handleChange = (event: React.SyntheticEvent<EventTarget>) => {
        const target = event.target as HTMLTextAreaElement;
        addComment(target.value)
    }

  return (<>
        <form className={styles.form}>
          <textarea value={value} onChange={handleChange} className={styles.input} />
          <button type="submit" className={styles.button}>Комментировать</button>

        </form>
      </>

  );
}
