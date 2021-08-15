import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import createSagaMiddleware from '@redux-saga/core';
import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './root-reducer';
const sagaMiddleware = createSagaMiddleware();

const middlwares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlwares));
sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
