import React from 'react';
import 'rc-pagination/assets/index.css';
import Pagination from 'rc-pagination';
import styles from './CustomPagination.module.css';

const iconItemRender = (current, type, element) => {
  if (type === 'prev') {
    return  <div className={styles.arrowLeft}></div>;
  }
  if (type === 'next') {
    return <div className={styles.arrowRight}></div>;
  }
  return element;
};

const CustomPagination = ({currentPage, onChangePage, total}) => {
  return (
    <div className={styles.wrapper}>
      <Pagination
        onChange={onChangePage}
        current={currentPage}
        total={total}
        itemRender={iconItemRender}
        className={styles.pagination}
        showTitle={false}
        style={{display: 'inline-block'}}
      />
    </div>
    
  );
}

export default CustomPagination;
