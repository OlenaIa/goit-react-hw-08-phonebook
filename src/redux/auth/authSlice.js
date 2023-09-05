const { createSlice } = require("@reduxjs/toolkit");
const { postUserThunk, postLogInThunk, postLogOutThunk } = require("services/fetchAuth");

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
        .addCase(postLogOutThunk.pending, (state) => {
                state.isLoggedIn = false;
                state.error = null;
            })
            .addCase(postLogOutThunk.fulfilled, (state) => {
                state.isLoggedIn = false;
                state.user = {name: null, email: null};
                state.token = null;
                state.error = null;
            })
            .addCase(postLogOutThunk.rejected, (state, { payload }) => {
                state.isLoggedIn = false;
                console.log('postLogOutThunk payload with error', payload);
                state.error = payload;
            })
    }
});



