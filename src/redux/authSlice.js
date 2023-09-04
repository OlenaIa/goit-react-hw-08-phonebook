const { createSlice } = require("@reduxjs/toolkit");

const authInitialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: {}
});