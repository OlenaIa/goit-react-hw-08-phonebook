import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const getContacts = async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const postContact = async (newContact, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', newContact);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const delContact = async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

export const getContactsThunk = createAsyncThunk(
    'phoneBook/getContacts',
    getContacts
);

export const postContactThunk = createAsyncThunk(
    'phoneBook/postContact',
    postContact
);
    
export const delContactThunk = createAsyncThunk(
    'phoneBook/delContact',
    delContact
);
