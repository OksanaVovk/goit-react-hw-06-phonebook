import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './reducer';
import { persistStore } from 'redux-persist';

export const store = configureStore({
  reducer: { contacts: persistedContactsReducer },
});

export const persistor = persistStore(store);
