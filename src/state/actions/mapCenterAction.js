import {
  SET_MAP_CENTER
} from '../../constants/actionTypes';

export function setMapCenter(lat, lng) {
  return {
    type: SET_MAP_CENTER,
    payload: {
      lat: lat,
      lng: lng
    }
  }
}
