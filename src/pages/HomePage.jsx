import * as React from 'react';
import {Paper, Typography, Link, Box, Button} from '@mui/material';
import hero from 'photo/hero.jpg'
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/authSelector';

export default function HomePage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey',
        color: '#fff',
        mb: 4,
        mt: 10,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom',
        backgroundImage: `url(${hero})`,
        minHeight: 450,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          position: 'relative',
          p: { xs: 3, md: 6 },
          pr: { md: 0 },
        }}
      >
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
              <Link variant="subtitle1" color="inherit" href="/goit-react-hw-08-phonebook/login">
                Sign In
              </Link>
            </Button></>)}
      </Box>
    </Paper>
  );
};

