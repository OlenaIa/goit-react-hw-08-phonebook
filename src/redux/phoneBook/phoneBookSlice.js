import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { delContactThunk, getContactsThunk, postContactThunk } from 'services/fetchContacts';

const contactInitialState = {
    contacts: [],
    isLoading: false,
    error: null,
    isContactAdd: false,
};

const onPending = (state) => {
    state.isLoading = true;
    state.error = null;
    state.isContactAdd = false;

};

const onRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.isContactAdd = false;
};

const arrOfActs = [getContactsThunk, postContactThunk, delContactThunk];

const addStatusToActs = status =>
    arrOfActs.map((el) => el[status]);

export const phoneBookSlice = createSlice({
    name: 'phoneBook',
    initialState: contactInitialState,
    extraReducers: builder => {
        builder
            .addCase(getContactsThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = payload;
                state.error = null;
            })
            .addCase(postContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = [...state.contacts, payload]
                state.error = null;
                state.isContactAdd = true;
            })
            .addCase(delContactThunk.fulfilled, (state, { payload }) => {
                state.isLoading = false;
                state.contacts = state.contacts.filter(contact => contact.id !== payload.id)
                state.error = null;
            })
            .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
            .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected)
    }
});
