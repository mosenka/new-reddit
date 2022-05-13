import React from 'react';
import styles from './userLink.css';

export function UserLink() {
  return (<div className={styles.userLink}>
    <img src="https://cdn.dribbble.com/users/759083/screenshots/17196153/media/a437d241c694189e6738c54dcdf9cfd6.jpg?compress=1&resize=320x240&vertical=top" alt="avatar" className={styles.avatar} />
    <a href="#user-link" className={styles.username}>Константин Кодов</a>
  </div>

  );
}
