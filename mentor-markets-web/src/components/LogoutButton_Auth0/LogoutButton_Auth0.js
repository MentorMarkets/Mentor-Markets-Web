import React from 'react';
import PropTypes from 'prop-types';
import './LogoutButton_Auth0.css';
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton_Auth0 = () => {
 
  const { logout } = useAuth0();
  
  return (
    <button onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  )
}

LogoutButton_Auth0.propTypes = {};

LogoutButton_Auth0.defaultProps = {};

export default LogoutButton_Auth0;
