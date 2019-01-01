import React from 'react';
import classNames from 'classnames';
import styles from './FilterButton.module.css';

const FilterButton = ({text, number, color, active, onPickStatus}) => {
  const className = classNames({
    [styles.wrapper]: true,
    [styles.active]: active
  });

  return (
    <div className={className} style={{color: color}} onClick={() => onPickStatus(text)}>
      <div className={styles.text}>{text}</div>
      <div className={styles.border} style={{backgroundColor: color}}>
        <div className={styles.number}>{number}</div>
      </div>
    </div>
  )
}

export default FilterButton