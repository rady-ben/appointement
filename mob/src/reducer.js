import {combineReducers} from 'redux';
import auth from './auth/duck';
import seller from './appointment/seller/duck';
import appointment from './appointment/appointment/duck';
import slot from './appointment/slot/duck';

const RootReducer = combineReducers({
  auth,
  seller,
  appointment,
  slot,
});

export default RootReducer;
