import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { postUserThunk, postLogInThunk, postLogOutThunk, getCurrentUserThunk } from "services/fetchAuth";

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    error: null,
    isCurrentUser: false
};

const onPending = (state) => {
    state.isLoggedIn = false;
    state.error = null;
};

const onRejected = (state, { payload }) => {
    state.isLoggedIn = false;
    state.error = payload;
};

const arrOfActs = [postUserThunk, postLogInThunk, postLogOutThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder
            .addCase(postUserThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.user = payload.user;
                state.token = payload.token;
                state.error = null;
            })
            .addCase(postLogInThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.user = payload.user;
                state.token = payload.token;
                state.error = null;
            })
            .addCase(postLogOutThunk.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = { name: null, email: null };
                state.token = null;
                state.error = null;
            })
            .addCase(getCurrentUserThunk.pending, (state) => {
                state.isLoggedIn = false;
                state.error = null;
                state.isCurrentUser = true;
            })
            .addCase(getCurrentUserThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                state.user = payload;
                state.error = null;
                state.isCurrentUser = false;

            })
            .addCase(getCurrentUserThunk.rejected, (state, { payload }) => {
                state.isLoggedIn = false;
                state.error = payload;
                state.isCurrentUser = false;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
};

export const authPersistReducer = persistReducer(
    persistConfig,
    authSlice.reducer
);