import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { options } from 'components/Form/Form';


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
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        Notify.failure(`We're sorry, something went wrong`, options);
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postLogIn = async (logInUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', logInUser);
        setAuthHeader(response.data.token);
        return response.data;
    } catch (e) {
        Notify.failure(`You entered an incorrect login or password`, options);
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postLogOut = async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const getCurrentUser = async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
    };

    try {
            setAuthHeader(persistedToken);
        const response = await axios.get('/users/current');
        return response.data;
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

export const getCurrentUserThunk = createAsyncThunk(
    'auth/getCurrentUser',
    getCurrentUser
);

