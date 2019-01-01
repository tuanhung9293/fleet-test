/* eslint-disable no-undef */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {mapStyles} from '../../../../constants/mapStyles';
import {setMapCenter} from '../../../../state/actions/mapCenterAction';
import {selectCar} from '../../../../state/actions/fleetsAction';
import FleetInfo from '../../../ui/FleetInfo';
import {
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

class MapCustom extends Component {
  onClickCar = (car) => {
    const {setMapCenter, selectCar} = this.props;

    selectCar(car.licensePlate);
    setMapCenter(car.lat, car.lng);
  }
  
  render() {
    const {paginatedFleets, licensePlate, currentMapCenter} = this.props;

    return (
      <GoogleMap
        defaultZoom={14}
        center={currentMapCenter}
        options={{
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.LEFT_TOP
          },
          styles: mapStyles
        }}
      >
        {paginatedFleets.map((marker, key) =>
          <Marker
            key={key}
            position={{lat: marker.lat, lng: marker.lng}}
            options={{
              icon: {
                url: require(`../../../../assets/car-${marker.status}.svg`),
                size: { height: 100, width: 100 },
                scaledSize: { height: 30, width: 30 },
                fixedRotation: true,
                anchor: {x: 15, y: 15},
              }
            }}
            onClick={() => this.onClickCar(marker)}
          >
            {marker.licensePlate === licensePlate &&
              <InfoWindow options={{pixelOffset: new google.maps.Size(-35, 6)}}>
                <FleetInfo fleet={marker} />
              </InfoWindow>
            }
          </Marker>
        )}
      </GoogleMap>
    )
  }
}

const mapStateToProps = ({fleets, mapCenter}) => {
  return {
    paginatedFleets: fleets.displayed,
    licensePlate: fleets.licensePlate,
    currentMapCenter: mapCenter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setMapCenter: (lat, lng) => dispatch(setMapCenter(lat, lng)),
    selectCar: (licensePlate) => dispatch(selectCar(licensePlate))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MapCustom);
