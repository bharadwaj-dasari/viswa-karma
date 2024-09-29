import React, { useState } from 'react';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Define valid admin credentials for users Bharadwaj and Karthik
  const validAdminCredentials = [
    { username: 'bharadwaj', password: 'adminbharadwaj' },
    { username: 'karthik', password: 'adminkarthik' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any valid admin pair
    const isValidAdmin = validAdminCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValidAdmin) {
      navigate('/admin/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <Typography variant="h3" gutterBottom sx={{ color: '#ffffff', fontFamily: 'Syne' }}>
        Admin Login
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ input: { color: '#ffffff' }, label: { color: '#ffffff' }, backgroundColor: '#333333', borderRadius: '4px' }}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          type="password"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ input: { color: '#ffffff' }, label: { color: '#ffffff' }, backgroundColor: '#333333', borderRadius: '4px' }}
        />
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 2 }}>
          Login
        </Button>
      </form>
    </Container>
  );
}

export default AdminLogin;
