import React from 'react';
import Checkbox from '../../../ui/Checkbox';
import FilterButton from '../../../ui/FilterButton';
import styles from './Filter.module.css';

const Filter = ({status, total, onPickStatus, onAllFleetsCheck, allChecked}) => {
  return (
    <div className={styles.filter}>
      <div className={styles.checkbox}>
        <label>
          <Checkbox checked={allChecked} onChange={onAllFleetsCheck}/>Show all {total} cars
        </label>
      </div>
      <div className={styles.groupStatus}>
        {status.map((status, key) =>
          <FilterButton key={key}
            text={status.text}
            number={status.number}
            color={status.color}
            active={status.active}
            onPickStatus={onPickStatus}
          />
        )}
      </div>
    </div>
  );
}

export default Filter;
