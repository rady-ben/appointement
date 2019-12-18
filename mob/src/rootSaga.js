import {all, call} from 'redux-saga/effects';
import authSaga from './auth/saga';
import fetchSellersListFlow from './appointment/seller/saga';
import slotFlow from './appointment/slot/saga';
import appointmentFlow from './appointment/appointment/saga';

export default function* rootSaga({store}) {
  yield all([
    call(authSaga, {store}),
    call(fetchSellersListFlow, {store}),
    call(slotFlow),
    call(appointmentFlow),
  ]);
}
