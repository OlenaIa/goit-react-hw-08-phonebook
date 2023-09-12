import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { options } from 'components/Form/Form';

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
        Notify.success(`Contact added successfully`, options);
        return response.data;
    }
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
};

const delContact = async (contactId, thunkAPI) => {
    try {
        const response = await axios.delete(`/contacts/${contactId}`);
                    Notify.warning(`Contact delete successfully`, options);
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
