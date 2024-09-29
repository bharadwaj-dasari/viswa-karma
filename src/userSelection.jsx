import React from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function UserSelection() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '65vh',
        backgroundColor: '#000000', 
        color: '#ffffff', 
        fontFamily: 'Syne', 
        textAlign: 'center',
        gap: '20px'
      }}
    >
      <Typography variant="h3" sx={{ mb: '20px',fontFamily: 'Syne' }}>
        Please select your role
      </Typography>
      <Button
        component={Link}
        to="/admin-login"
        sx={{
            fontFamily: 'Syne',
            fontSize: '18px',
            fontWeight: 'bold',
            backgroundColor: '#ffffff',
            color: '#000000', 
            padding: '15px 30px',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: '#fefefe' ,
              scale:'1.02'
            }
        }}
      >
        Admin
      </Button>
      <Button
        component={Link}
        to="/user-login"
        sx={{
          fontFamily: 'Syne',
          fontSize: '18px',
          fontWeight: 'bold',
          backgroundColor: '#ffffff',
          color: '#000000', 
          padding: '15px 30px',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#fefefe' ,
            scale:'1.02'
          }
        }}
      >
        User
      </Button>
    </Box>
  );
}

export default UserSelection;
