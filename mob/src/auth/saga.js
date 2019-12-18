import {all, takeLatest, put} from 'redux-saga/effects';
import {signIn, signUp, saveProfile} from './duck';
import {signInApi, signUpApi} from '../api/auth';
import NavigationService from '../NavigationService';
import {fetchAppointmentsListFlow} from '../appointment/appointment/saga';

function* signInFlow({payload: {userName, password}}) {
  try {
    const {data} = yield signInApi({userName, password});
    if (data) {
      yield put(saveProfile({userName, password}));
      alert('sign in success');
      yield fetchAppointmentsListFlow();
      NavigationService.navigate('Dashboard');
    } else {
      alert('sign in error');
    }
  } catch (error) {
    alert('net work error');
  }
}

function* signUpFlow({payload: {userName, password}}) {
  if (!userName || !password) {
    alert('fill user name and password please');
    return 0;
  }

  try {
    const {data} = yield signUpApi({userName, password});
    if (data) {
      yield put(saveProfile({userName, password}));
      alert('sign Up success');
      yield fetchAppointmentsListFlow();
      NavigationService.navigate('Dashboard');
    } else {
      alert('sign Up error');
    }
  } catch (error) {
    alert('network error');
  }
}

export default function* rootSagas({store}) {
  yield all([takeLatest(signIn, signInFlow), takeLatest(signUp, signUpFlow)]);
}
