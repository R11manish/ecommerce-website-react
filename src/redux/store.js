import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const middlwares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlwares));
sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store);
