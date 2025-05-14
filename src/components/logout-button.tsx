'use client';
import React from 'react'
import {Button} from '@mui/material';

export default function LogoutButton() {
    
  const handleLogout = () => {
    sessionStorage.removeItem('currentUser');
  };
  
  return (
    <Button onClick={handleLogout} color="primary" variant="outlined">
      Logout
    </Button>
  )
}
