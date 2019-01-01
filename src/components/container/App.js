import React, { Component } from 'react';
import Header from './Header';
import Title from './Title';
import Map from "./Map";
import Table from "./Table"
import styles from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Header />
        <Title />
        <div className={styles.body}>
          <div className={styles.left}>
            <Table />
          </div>
          <div className={styles.right}>
            <Map />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
