import {
  SET_FLEETS,
  PAGINATE_FLEETS,
  SELECT_CAR,
} from '../../../constants/actionTypes';

const initialState = {
  licensePlate: '',
  filter: [],
  displayed: []};

function fleets(state = initialState, action) {
  switch (action.type) {
    case SET_FLEETS:
      return {
        ...state,
        filter: action.payload.filter,
        displayed: action.payload.displayed,
        licensePlate: ''
      };

    case PAGINATE_FLEETS:
      return {
        ...state,
        displayed: action.payload,
        licensePlate: ''
      };

    case SELECT_CAR:
      return {
        ...state,
        licensePlate: action.payload
      };

    default:
      return state
  }
}

export default fleets;
