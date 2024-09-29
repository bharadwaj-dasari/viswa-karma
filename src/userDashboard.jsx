import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';

function UserDashboard() {
  // Define state variables
  const [tollCharges, setTollCharges] = useState(0);
  const [debt, setDebt] = useState(0);
  const [totalKms, setTotalKms] = useState(0);

  // Simulate fetching data
  useEffect(() => {
    // Replace with actual data fetching logic
    const fetchData = async () => {
      // Example data
      const userData = {
        tollCharges: 123.45,
        debt: 67.89,
        totalKms: 5432
      };
      
      // Set state with fetched data
      setTollCharges(userData.tollCharges);
      setDebt(userData.debt);
      setTotalKms(userData.totalKms);
    };

    fetchData();
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Typography variant="h3" sx={{ fontFamily: 'Syne', marginTop:'2rem' }} gutterBottom>
        User Dashboard
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Syne' }}>
        Welcome, User!
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Syne', mt: 2 }}>
        Toll Charges Paid: ${tollCharges.toFixed(2)}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Syne', mt: 1 }}>
        Debt: ${debt.toFixed(2)}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: 'Syne', mt: 1 }}>
        Total Kilometers: {totalKms} kms
      </Typography>
    </Container>
  );
}

export default UserDashboard;
