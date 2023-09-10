import { createSlice } from '@reduxjs/toolkit'

const filterInitialState = "";

export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        filterSet(_, action) {
            return action.payload;
        }
    }
});

export const selectFilter = state => state.filter;

export const { filterSet } = filterSlice.actions;