import {all, takeLatest, put} from 'redux-saga/effects';
import {fetchListSlot, setListSlot} from './duck';
import {getListSlotApi} from '../../api/appointment';
import NavigationService from '../../NavigationService';
import store from '../../configureStore';

function* fetchSlotFlow({payload: {userNameSeller, passwordSeller}}) {
  try {
    const {data} = yield getListSlotApi({userNameSeller, passwordSeller});
    yield put(setListSlot({listSlot: data}));
    NavigationService.navigate('ListSlot');
    console.log(store.getState());
  } catch (error) {
    alert('net work error');
  }
}

export default function* rootSagas() {
  yield all([takeLatest(fetchListSlot, fetchSlotFlow)]);
}
