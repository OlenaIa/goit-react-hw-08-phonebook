import { getFilter } from "redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { getPhoneBookValue } from "redux/phoneBookSlice";
import { delContactThunk, getContactsThunk } from "services/fetchContacts";
import { useEffect } from "react";
import * as React from 'react';
import { Box, List, ListItem, ListItemButton, IconButton, ListItemText, Typography, Avatar } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';


export const ContactsList = () => {
    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getContactsThunk())
    }, [dispatch]);

    const phoneBook = useSelector(getPhoneBookValue);
    const filterPhoneBook = useSelector(getFilter);

    const lowerFilter = filterPhoneBook.toLowerCase();
    const visibleContacts = phoneBook.filter(({ name }) =>
        (name.toLowerCase().includes(lowerFilter)));
  
    const deleteContact = (contactId) => {
        dispatch(delContactThunk(contactId))
    };
    
    return (
        <Box sx={{ width: '100%', mt: 1, display: 'flex',
            flexDirection: 'column', alignItems: 'center'
        }}>
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <ImportContactsIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                    Your Contacts
                </Typography>
            <List sx={{ width:396 }}>
                    {visibleContacts.map(({ name, number, id }) => (
                        <ListItem key={id} sx={{bgcolor:'rgba(208, 224, 241, 0.822)', borderRadius: 2, mb: 1}} secondaryAction={
                            <IconButton onClick={() => deleteContact(id)} aria-label="delete">
                                <DeleteIcon />
                            </IconButton>}>
                            <ListItemButton>
                                <ListItemText>{name}: {number}</ListItemText>
                            </ListItemButton>
                        </ListItem>))}
          
                </List>
        </Box>
    );
};