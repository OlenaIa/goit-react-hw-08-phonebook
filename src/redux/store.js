import { configureStore } from '@reduxjs/toolkit'
import { filterSlice } from './filterSlice'
import { contactsPersistReducer, phoneBookSlice } from './phoneBookSlice'
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { authPersistReducer, authSlice } from './auth/authSlice';

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