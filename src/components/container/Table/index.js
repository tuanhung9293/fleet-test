import React, { Component } from 'react';
import {connect} from 'react-redux';
import Filter from './Filter';
import DataTable from './DataTable';
import CustomPagination from './CustomPagination';
import fleetData from '../../../mockedData/fleetData';
import {statusData} from '../../../services/status';
import {setFleets, paginateFleets} from '../../../state/actions/fleetsAction';
import {setMapCenter} from '../../../state/actions/mapCenterAction';
import styles from './Table.module.css';

class Table extends Component {
  state = {
    status: [],
    currentPage: 1,
    showAllFleets: true
  }

  componentDidMount = () => {
    this.setState({
      status: statusData(fleetData)
    });
    this.onFilledFleets();
  }

  onPickStatus = (status) => {
    let newStatus = this.state.status.map((item) => {
      if (status === item.text) {
        item.active = !item.active;
      }

      return item;
    });

    this.setState({status: newStatus, showAllFleets: false}, () => this.onFilledFleets());
  }

  onAllFleetsCheck = (e) => {
    this.setState({showAllFleets: e.target.checked}, () => this.onFilledFleets())
  }

  onChangePage = (current=1, pageSize=10) => {
    const {filterFleets, paginateFleets, setMapCenter} = this.props;

    let newPaginatedFleets = filterFleets.slice((current - 1) * pageSize, current * pageSize);
    this.setState({currentPage: current});
    paginateFleets(newPaginatedFleets);
    setMapCenter(newPaginatedFleets[0].lat, newPaginatedFleets[0].lng);    
  }

  onFilledFleets = () => {
    const {setFleets, setMapCenter} = this.props;

    let newFleets = fleetData;
    if (!this.state.showAllFleets) {
      let statusArray = this.state.status.filter((item) => item.active).map((item) => item.text);
      newFleets = fleetData.filter((fleet) => statusArray.includes(fleet.status));
    }

    let newPaginatedFleets = newFleets.slice(0, 10);

    this.setState({currentPage: 1});
    setFleets(newFleets, newPaginatedFleets);
    newPaginatedFleets.length > 0 && setMapCenter(newPaginatedFleets[0].lat, newPaginatedFleets[0].lng);
  }
  
  render() {
    const {status, showAllFleets, currentPage} = this.state;
    const {filterFleets, paginatedFleets} = this.props;
    return (
      <React.Fragment>
        <Filter
          status={status}
          total={fleetData.length}
          allChecked={showAllFleets}
          onPickStatus={this.onPickStatus}
          onAllFleetsCheck={this.onAllFleetsCheck}
        />
        <div className={styles.table}>
          {paginatedFleets.length > 0 ?
            <DataTable fleets={paginatedFleets} />
            :
            <div className={styles.noShow}>No fleet to show</div>
          }
        </div>
        {paginatedFleets.length > 0 &&
          <CustomPagination
            onChangePage={this.onChangePage}
            currentPage={currentPage}
            total={filterFleets.length}
          />
        }
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({fleets}) => {
  return {
    filterFleets: fleets.filter,
    paginatedFleets: fleets.displayed,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFleets: (filter, displayed) => dispatch(setFleets(filter, displayed)),
    paginateFleets: (data) => dispatch(paginateFleets(data)),
    setMapCenter: (lat, lng) => dispatch(setMapCenter(lat, lng))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
