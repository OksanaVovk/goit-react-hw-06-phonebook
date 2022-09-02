import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedContactsReducer = persistReducer(persistConfig, todosReducer);

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer },
});

export const persistor = persistStore(store);
