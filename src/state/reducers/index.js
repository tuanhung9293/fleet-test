import {combineReducers} from 'redux'
import fleets from './fleets';
import mapCenter from './mapCenter';

const root = combineReducers({
  fleets,
  mapCenter
})

export default root