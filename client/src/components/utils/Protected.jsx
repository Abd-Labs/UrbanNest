import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const Protected = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Show loading indicator

  const {Component} = props;
  useEffect(() => {
    // Check if the authenticationSuccess flag is set
    const authenticationSuccess = document.cookie
      .split('; ')
      .find(row => row.startsWith('authenticationSuccess='))
      ?.split('=')[1];

      if (authenticationSuccess === 'true') {
        setIsLoggedIn(true);
      } else {
        <Navigate to="/login" /> // Redirect to login if not logged in
      }
  
      setIsLoading(false); // Finish loading
  },[])


  return (
    isLoading ? (
      <div>Loading...</div> // Display a loading indicator while loading
    ) : isLoggedIn ? (
      <Component /> // Render Protected component's content if logged in
    ) : (
      <Navigate to="/login" /> // Redirect to login if not logged in
    )
  );
}

export default Protected;
