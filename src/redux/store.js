import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './filterSlice'
import { phoneBookSlice } from './phoneBook/phoneBookSlice'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { authPersistReducer } from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        phoneBook: phoneBookSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);