import {
  SET_MAP_CENTER
} from '../../../constants/actionTypes';

const initialState = {lat: 0, lng: 0};

function mapCenter(state = initialState, action) {
  switch (action.type) {
    case SET_MAP_CENTER:
      return {
        ...state,
        lat: action.payload.lat,
        lng: action.payload.lng
      };

    default:
      return state
  }
}

export default mapCenter;
