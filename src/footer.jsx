import React from 'react';
import { Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#000000', 
        padding: '20px', 
        textAlign: 'center', 
        color: '#ffffff', 
        position: 'fixed', 
        bottom: 0, 
        width: '100%',
        fontSize: '32px !important',
  fontFamily: 'Syne !important',
        zIndex: 1000, // Ensure footer is on top
      }}
    >
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          borderTop: '1px solid #ffffff', 
          marginTop:'1rem',
          bottom: '80px', 
        }}
      />
      <Typography variant="body2" sx={{marginTop: '2rem'}}>
        © 2024 TraffIQ. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
