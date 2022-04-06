import React from 'react';
import PropTypes from 'prop-types';
import './LoginButton_Auth0.css';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton_Auth0 = () => {
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

LoginButton_Auth0.propTypes = {};

LoginButton_Auth0.defaultProps = {};

export default LoginButton_Auth0;
