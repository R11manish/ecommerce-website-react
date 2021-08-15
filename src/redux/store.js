import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlwares = [thunk];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlwares));

export const persistor = persistStore(store);
