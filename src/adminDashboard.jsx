import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

function AdminDashboard() {
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [vehicleDetails, setVehicleDetails] = useState(null);

  // Example function to simulate fetching vehicle details
  const fetchVehicleDetails = () => {
    // Simulate fetching details with static data for now
    const details = {
      kilometersTravelled: '1200 km',
      registrationDate: '2020-08-15',
      tollCharge: '399 rs',
    };
    setVehicleDetails(details);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (vehicleNumber.trim() === '') {
      alert('Please enter a valid vehicle number');
      return;
    }
    fetchVehicleDetails();
  };

  return (
    <Container component="main" maxWidth="md" sx={{ marginTop: '2rem'}}>
      <Typography variant="h3" sx={{ fontFamily: 'Syne' }} gutterBottom>
        Admin Dashboard
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Syne', mb: 3 }}>
        Welcome, Admin!
      </Typography>

      {/* Form for fetching vehicle details */}
      <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
        <TextField
          variant="outlined"
          label="Enter Vehicle Number"
          fullWidth
          value={vehicleNumber}
          onChange={(e) => setVehicleNumber(e.target.value)}
          sx={{
            mb: 2,
            input: { color: '#fff', fontFamily: 'Syne' }, // White text color
            borderRadius: '4px', // Add some border-radius for a rounded look
            '& .MuiOutlinedInput-root': {
              bgcolor: '#000', // Set background color to black for visibility
              '& fieldset': {
                borderColor: '#fff', // White border color
              },
              '&:hover fieldset': {
                borderColor: '#1976d2', // Blue border color on hover
              },
              '&.Mui-focused fieldset': {
                borderColor: '#1976d2', // Blue border color when focused
              },
            },
          }}
          InputLabelProps={{
            sx: {
              color: '#fff', // White label color for normal state
              '&.Mui-focused': { color: '#1976d2' }, // Blue color when focused
              fontFamily: 'Syne', // Use Syne font for label
              marginBottom: '2rem'
            },
          }}
        />
        <Button type="submit" variant="contained" fullWidth>
          Fetch Details
        </Button>
      </Box>

      {/* Display vehicle details if available */}
      {vehicleDetails && (
        <Box sx={{ mt: 4, p: 2, border: '1px solid #ddd', borderRadius: '8px', bgcolor: '#333', color: '#fff' }}>
          <Typography variant="h5" sx={{ fontFamily: 'Syne', mb: 2 }}>
            Vehicle Details
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Syne' }}>
            <strong>Kilometers Travelled on Highway:</strong> {vehicleDetails.kilometersTravelled}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Syne' }}>
            <strong>Registration Date:</strong> {vehicleDetails.registrationDate}
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Syne' }}>
            <strong>Toll Charge:</strong> {vehicleDetails.tollCharge}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default AdminDashboard;
