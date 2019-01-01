import React from 'react';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.link}>
        <a href="/">&lt; Back to Overview</a>
      </div>
      <div className={styles.title}>Connect4car’s Fleet</div>
    </div>
  );
}

export default Title;
