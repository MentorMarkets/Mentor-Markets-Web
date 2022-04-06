import React, { lazy, Suspense } from 'react';

const LazyLoginButton_Auth0 = lazy(() => import('./LoginButton_Auth0'));

const LoginButton_Auth0 = props => (
  <Suspense fallback={null}>
    <LazyLoginButton_Auth0 {...props} />
  </Suspense>
);

export default LoginButton_Auth0;
