import { postLogInThunk } from "services/fetchLogIn";

const { createSlice } = require("@reduxjs/toolkit");
const { postUserThunk } = require("services/fetchAuth");

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    error: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder
            .addCase(postUserThunk.pending, (state) => {
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(postUserThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                console.log('payload.user', payload.user);
                console.log('payload.token', payload.token);
                state.user = payload.user;
                state.token = payload.token;
                state.error = null;
            })
            .addCase(postUserThunk.rejected, (state, { payload }) => {
                state.isLoggedIn = false;
                console.log('payload with error', payload);
                state.error = payload;
            })
        .addCase(postLogInThunk.pending, (state) => {
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(postLogInThunk.fulfilled, (state, { payload }) => {
                state.isLoggedIn = true;
                console.log('postLogInThunk payload.user', payload.user);
                console.log('postLogInThunk payload.token', payload.token);
                state.user = payload.user;
                state.token = payload.token;
                state.error = null;
            })
            .addCase(postLogInThunk.rejected, (state, { payload }) => {
                state.isLoggedIn = false;
                console.log('postLogInThunk payload with error', payload);
                state.error = payload;
            })
    }
});



