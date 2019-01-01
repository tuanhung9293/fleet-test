import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setMapCenter} from '../../../../state/actions/mapCenterAction';
import {selectCar} from '../../../../state/actions/fleetsAction';
import StatusCirle from '../../../ui/StatusCirle';
import styles from './DataTable.module.css';

class DataTable extends Component {
  onClickCar = (car) => {
    const {setMapCenter, selectCar} = this.props;

    selectCar(car.licensePlate);
    setMapCenter(car.lat, car.lng);
  }

  render() {
    return (
      <table className={styles.table}>
        <thead>
          <tr>
            <th></th>
            <th className={styles.light}>Name</th>
            <th className={styles.light}>License Plate</th>
          </tr>
        </thead>
        <tbody>
          {this.props.fleets.map((car, key) =>
            <tr key={key} onClick={() => this.onClickCar(car)}>
              <td>
                <StatusCirle status={car.status}/>
              </td>
              <td className={styles.name}>{car.name}</td>
              <td>{car.licensePlate}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setMapCenter: (lat, lng) => dispatch(setMapCenter(lat, lng)),
    selectCar: (licensePlate) => dispatch(selectCar(licensePlate))
  }
}

export default connect(null, mapDispatchToProps)(DataTable);
