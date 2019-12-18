import {createStore, applyMiddleware} from 'redux';
import RootReducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(RootReducer, {}, enhancer);

sagaMiddleware.run(rootSaga, {store});

export default store;
