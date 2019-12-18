import {put, select, all, takeLatest} from 'redux-saga/effects';
import {
  getListAppointmentApi,
  requestAppointmentApi,
} from '../../api/appointment';
import {getUserName, getPassword} from '../../auth/selectors';
import {setListAppointments, requestAppointment, addAppointment} from './duck';

export function* fetchAppointmentsListFlow() {
  try {
    const userName = yield select(getUserName);
    const password = yield select(getPassword);
    const {data} = yield getListAppointmentApi({
      userNameClient: userName,
      passwordClient: password,
    });
    yield put(setListAppointments({listAppointments: data}));
  } catch (error) {
    alert('net work error');
  }
}

function* requestAppointmentFlow({
  payload: {userNameSeller, passwordSeller, time, date},
}) {
  try {
    const userNameClient = yield select(getUserName);
    const passwordClient = yield select(getPassword);
    const accompished = yield requestAppointmentApi({
      userNameSeller,
      passwordSeller,
      time,
      date,
      userNameClient,
      passwordClient,
      state: 'pending',
    });
    if (accompished) {
      alert(
        'appointement added succefully you can check the state of it on your appointement list',
      );
      yield put(
        addAppointment({
          userNameSeller,
          passwordSeller,
          time,
          date,
          state: 'pending',
        }),
      );
    } else {
      alert('error when adding appointement');
    }
  } catch (error) {
    alert('net work error');
  }
}

export default function* rootSagas() {
  yield all([takeLatest(requestAppointment, requestAppointmentFlow)]);
}
