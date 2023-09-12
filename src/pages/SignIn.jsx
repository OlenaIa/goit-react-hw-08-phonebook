import * as React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogInThunk } from "services/fetchAuth";
import { Avatar, Button, CssBaseline, TextField, Box, Container, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { avatarStyle, boxFormStyle } from './StylePages';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
            
      default:
        break;
    }
  };

  const onSubmitLogIn = (event) => {
    event.preventDefault();
    const logInUser = { email, password };
    dispatch(postLogInThunk(logInUser));
  };

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={boxFormStyle}>
          <Avatar sx={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmitLogIn} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" }}
              fullWidth
              value={email}
              type="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={onChangeInput}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              name="password"
              value={password}
              autoComplete="current-password"
              onChange={onChangeInput}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
  );
};
