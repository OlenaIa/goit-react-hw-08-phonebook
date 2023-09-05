import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const postLogIn = async (logInUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', logInUser);
        console.log('postLogInThunk response', response);
        return response.data;
    } catch (e) {
        console.log('postLogInThunk e.message', e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const postLogInThunk = createAsyncThunk(
    'auth/postLogIn',
    postLogIn
);