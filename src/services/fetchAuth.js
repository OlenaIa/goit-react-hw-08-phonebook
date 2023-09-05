import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const postUser = async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        console.log(response);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        console.log('e.message', e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postLogIn = async (logInUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', logInUser);
                setAuthHeader(response.data.token);
        console.log('postLogInThunk response', response);
        return response.data;
    } catch (e) {
        console.log('postLogInThunk e.message', e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postLogOut = async (_, thunkAPI) => {
    try {
        const response = await axios.post('/users/logout');
        clearAuthHeader();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const postUserThunk = createAsyncThunk(
    'auth/postUser',
    postUser
);

export const postLogInThunk = createAsyncThunk(
    'auth/postLogIn',
    postLogIn
);

export const postLogOutThunk = createAsyncThunk(
    'auth/postLogOut',
    postLogOut
);

