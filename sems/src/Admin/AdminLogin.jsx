
import React, { useState } from 'react';
import { TextField, Button, Typography, Container, styled } from '@mui/material';
import Navbar from '../Navigation Bar/Mynavbar';
import { useNavigate } from 'react-router-dom';

const RootContainer = styled('div')({
  background: 'rgb(240,248,255)', // Set background color to red
  minHeight: '100vh', // Ensure the container takes up the full height of the viewport
});


const StyledButton2 = styled(Button)({
  padding: '10px 20px',
  fontSize: '16px',
  // fontFamily:'vardhana',
  backgroundColor: 'rgb(190,206,234)',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
});

function AdminLogin() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === 'shalinchore@gmail.com' && pass === '9824') {
      navigate('/admin_data');
    } else {
      console.log('Invalid credentials');
    }
  };

  return (
    <RootContainer>
      <Navbar />
      <Container maxWidth="sm" sx={{ marginTop: '10%', background:'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(187,218,244,1) 100%)', padding: '20px', borderRadius: '10px' }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Admin Login
          </Typography>
          <TextField
            label="Email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={pass}
            onChange={handlePassChange}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <StyledButton2 type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </StyledButton2>
        </form>
      </Container>
    </RootContainer>
  );
}

export default AdminLogin;
