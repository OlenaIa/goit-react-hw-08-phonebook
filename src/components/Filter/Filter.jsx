import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { filterSet, getFilter } from "redux/filterSlice";
import { Avatar, TextField, Box } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export const Filter = () => {
    const dispatch = useDispatch();
    const filterPhoneBook = useSelector(getFilter);

    const onChangeFilter = (event) => {
        const { value } = event.currentTarget;
        dispatch(filterSet(value))
    };
    
    return (
        <Box component="div" sx={{
            mt: 1,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 5,
            alignItems: 'center',
        }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <PersonSearchIcon />
            </Avatar>
            <TextField
                margin="normal"
                sx={{
                    width: 324,
                    bgcolor: 'rgba(208, 224, 241, 0.822)',
 }}
                label="Find contacts by name:"
                type="text"
                name="filter"
                value={filterPhoneBook}
                title="Enter the name"
                onChange={onChangeFilter}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            />
        </Box>
    );
};