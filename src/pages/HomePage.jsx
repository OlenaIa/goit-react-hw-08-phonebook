import * as React from 'react';
import {Paper, Typography, Box, Button} from '@mui/material';
import hero from 'photo/hero.jpg'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelector';
import { boxMainStyle, paperMainStyle } from './StylePages';
import { StyledNavLink } from 'components/Navigation/StyleNav';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Paper sx={paperMainStyle(hero)}>
      <Box sx={boxMainStyle}>
        {isLoggedIn ? (<><Typography component="h1" variant="h3" color="inherit" gutterBottom>
          Hi, {user.name}! <br />
          Welcome to your phonebook. </Typography>
        </>) :
          (<><Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Hello! I'm your phonebook. </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              Please log in to your account or register.
            </Typography>
            <Button variant="contained" >
              <StyledNavLink to="/login">Sign In</StyledNavLink>
            </Button></>)}
      </Box>
    </Paper>
  );
};

