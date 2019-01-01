import React from 'react'
import styles from './FleetInfo.module.css'

function FleetInfo({fleet}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles}><strong>{fleet.licensePlate}</strong></div>
      <div className={styles}><strong>{fleet.name}</strong> (view driver’s profile)</div>
      <div className={styles.place}>
        <span>{fleet.place}</span><span className={styles.time}>{fleet.time}</span></div>
      <div className={styles.row}>
        <div className={styles.label}>LOCATION</div>
        <div className={styles.content}>{fleet.location}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>STATUS</div>
        <div className={styles.content}>
          <strong>{fleet.status}</strong>
          <div>{fleet.statusDetail}</div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>SPEED</div>
        <div className={styles.content}>{fleet.speed}</div>
      </div>
      <div className={styles.row}>
        <div className={styles.label}>DIRECTION</div>
        <div className={styles.content}>{fleet.direction}</div>
      </div>
    </div>
  )
}

export default FleetInfo