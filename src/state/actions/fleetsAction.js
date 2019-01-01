import {
  SET_FLEETS,
  PAGINATE_FLEETS,
  SELECT_CAR
} from '../../constants/actionTypes';

export function setFleets(filter, displayed) {
  return {
    type: SET_FLEETS,
    payload: {
      filter: filter,
      displayed: displayed
    }
  }
}

export function paginateFleets(data) {
  return {
    type: PAGINATE_FLEETS,
    payload: data
  }
}

export function selectCar(licensePlate) {
  return {
    type: SELECT_CAR,
    payload: licensePlate
  }
}
