import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Import MenuIcon

function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000', color: '#ffffff', fontFamily: 'Wix MadeFor Text' }}>
      <Toolbar>
        
        <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'Wix MadeFor Text', textAlign: 'left' }}>
          TraffIQ
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact Us
          </Button>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
