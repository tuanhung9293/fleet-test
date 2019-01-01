import React from 'react';
import {statusToColor} from '../../../services/status';
import styles from './StatusCirle.module.css';

const StatusCirle = ({status}) => {
  return (
    <div className={styles.circle} style={{backgroundColor: statusToColor(status)}}></div>
  )
}

export default StatusCirle