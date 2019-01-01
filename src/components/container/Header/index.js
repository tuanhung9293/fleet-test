import React from 'react';
import fleetLogo from '../../../assets/fleet-logo.png';
import logoutPng from '../../../assets/logout.png';
import userPng from '../../../assets/user.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <img src={fleetLogo} alt="fleet-logo.png" style={{height: '45px', width: '45px'}} />
      </div>
      <div className={styles.nav}>
        <div className={styles.activeText}>Overview</div>
        <div className={styles.text}>Fleet Utidivsation</div>
        <div className={styles.text}>Violations</div>
        <div className={styles.text}>Drivers Scoreboard</div>
        <div className={styles.text}>Vehicle Maintenance</div>
        <div className={styles.lastText}>Reports</div>
        <div className={styles.groupButton}>
          <img className={styles.user} src={userPng} alt="user" height="22px"/>
          <img className={styles.logout} src={logoutPng} alt="logout" height="22px"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
