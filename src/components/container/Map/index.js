import React from 'react';
import {compose} from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import MapCustom from './MapCustom';

const ComposedMapCustom = compose(
  withScriptjs,
  withGoogleMap
)(MapCustom);

const Map = () => {
  return (
    <ComposedMapCustom
      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDYYcteu0thJ2Z-jHGM7zM5ERz-6-BS7iE&v=3.exp&libraries=geometry,drawing,places"
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100%` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}

export default Map;
