import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const postUser = async (newUser, thunkAPI) => {
    try {
        const response = await axios.post('/users/signup', newUser);
        console.log(response);
        return response.data;
    } catch (e) {
        console.log('e.message', e.message);
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const postUserThunk = createAsyncThunk(
    'auth/postUser',
    postUser
);