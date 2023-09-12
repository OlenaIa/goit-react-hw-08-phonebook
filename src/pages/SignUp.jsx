import * as React from 'react';
import { Avatar, Button, Container, Typography, CssBaseline, TextField, Box } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserThunk } from "services/fetchAuth";
import { avatarStyle, boxBottomFStyle, boxFormStyle } from './StylePages';
import { StyledNavLink } from 'components/Navigation/StyleNav';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event) => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
            
      default:
        break;
    }
  }

  const onSubmitUser = (event) => {
    event.preventDefault();
    const newUser = { name, email, password };
    dispatch(postUserThunk(newUser));
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={onSubmitUser} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            helperText="The name must contain only letters, apostrophes, hyphens and indents."
            inputProps={{ inputMode: 'text', pattern: "^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" }}
            autoComplete="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            onChange={onChangeInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            helperText="Please enter a valid email address"
            // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$" }}
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={email}
            autoComplete="email"
            onChange={onChangeInput}
          />
          <TextField
            margin="normal"
            required
            helperText='The password must contain at least 7 characters'
            fullWidth
            // inputProps={{ inputMode: 'email', pattern: "^[a-zA-Z0-9!@#$%^&*()-_=+`~{}|:<>/?]+$" }}
            type="password"
            name="password"
            value={password}
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
            onChange={onChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={boxBottomFStyle}>
            <StyledNavLink to="/login">Already have an account? Sign in</StyledNavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
