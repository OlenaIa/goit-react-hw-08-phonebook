import { Form } from "components/Form/Form";
import { ContactsList } from "components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { Error } from "components/Error/Error";
import { useSelector } from "react-redux";
import { getError, getIsLoading, getPhoneBookValue } from "redux/phoneBookSlice";
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import * as React from 'react';
import contacts from 'photo/contacts.jpg';

const ContactsPage = () => {
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    const phoneBook = useSelector(getPhoneBookValue);
    
    return (
            <Container component="main" maxWidth="md" sx={{
                position: 'relative',
                backgroundColor: 'grey.300',
                color: '#0c0808',
                mb: 4,
                mt: 10,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundImage: `url(${contacts})`,
            }}>
                <CssBaseline />
                <Box sx={{
                        bgcolor: 'rgba(145, 185, 229, 0.15)',
                        mx: 'auto',
                        borderRadius: 5,
                        maxWidth: 500,
                        px: 5,
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                <Form />
                <Filter />
                                {error ? <Error /> : <ContactsList />}

                    {isLoading && <Loader />}
                    {phoneBook.length === 0 && !error && !isLoading &&
                        <Box sx={{
                            width: '100%',
                            height: 56,
                            borderRadius: 5,
                            mt: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            bgcolor: 'rgba(208, 224, 241, 0.822)',
                            alignItems: 'center'
                        }}>
                            <Typography component="h1" variant="h5">
                                You don't have any contacts yet
                            </Typography>
                        </Box>}
                </Box>
            </Container>
    )
};

export default ContactsPage;