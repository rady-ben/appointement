import {put} from 'redux-saga/effects';
import {setListSellers} from './duck';
import {getListApi} from '../../api/appointment';

export default function* fetchSellersListFlow({store}) {
  try {
    const {data} = yield getListApi();
    yield put(setListSellers({listSellers: data}));
  } catch (error) {
    alert('net work error');
  }
}
