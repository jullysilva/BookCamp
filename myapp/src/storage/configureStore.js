import { createStore, applyMiddleware } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';

import Reducer from './reducers';

const persistConfig = {
  key: 'RootStorage',
  storage: storage
}

const persistedReducer = persistReducer(persistConfig, Reducer);

const configureStore = () => {
  var store = createStore(persistedReducer, applyMiddleware(logger));
  var persistor = persistStore(store);
  return { store, persistor }
};

export default configureStore;