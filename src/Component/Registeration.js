/* eslint-disable react/jsx-no-undef */
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Select } from '@mui/material';
import Login from './Component/login.tsx';
import { useState } from 'react';

export default function Registeration() {

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  const theme = createTheme();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phonenumber"
                  label="Phone number"
                  name="phonenumber"
                  autoComplete="phonenumber"
                />
              </Grid>
              <Grid>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>18</MenuItem>
          <MenuItem value={20}>19</MenuItem>
          <MenuItem value={30}>20</MenuItem>
          <MenuItem value={10}>21</MenuItem>
          <MenuItem value={20}>22</MenuItem>
          <MenuItem value={30}>23</MenuItem>
          <MenuItem value={10}>24</MenuItem>
          <MenuItem value={20}>25</MenuItem>
          <MenuItem value={30}>26</MenuItem>
          <MenuItem value={10}>27</MenuItem>
          <MenuItem value={20}>28</MenuItem>
          <MenuItem value={30}>29</MenuItem>
          <MenuItem value={10}>30</MenuItem>
          <MenuItem value={20}>31</MenuItem>
          <MenuItem value={30}>32</MenuItem>
        </Select>
      </FormControl>
      
              <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>

            </Grid>
            </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
          
            <Button  onClick={handleClick}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
{/* 
{clicked ? (
        <Link href="/Setpassword">
         
        </Link>
      ) : (
        <button onClick={handleClick}>Sign Up</button>
      )} */}
    

            <Grid container justifyContent="flex-end">
              <Grid item>
              <Link variant="body2" to="/Component/login"> Already have an account? Sign in</Link>
              
              </Grid> 
    
  


            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}