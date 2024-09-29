import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './header';
import Footer from './footer';

// Lazy load components
const UserSelection = lazy(() => import('./userSelection'));
const AdminLogin = lazy(() => import('./adminLogin'));
const UserLogin = lazy(() => import('./userLogin'));
const AdminDashboard = lazy(() => import('./adminDashboard'));
const UserDashboard = lazy(() => import('./userDashboard'));

const SuspenseHeading = lazy(() => import('./suspenseHeading'));

function App() {
  return (
    <Router>
      <Header />
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          borderTop: '1px solid #ffffff', 
          marginTop: '10px', 
        }}
      />
      <div className="App" >
        <Suspense fallback={<SuspenseHeading />}>
          <Routes>
            <Route path="/" element={<UserSelection />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/user-login" element={<UserLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/user/dashboard" element={<UserDashboard />} />
          </Routes>
        </Suspense>
      </div>
      
      <Footer />
    </Router>
  );
}

export default App;
