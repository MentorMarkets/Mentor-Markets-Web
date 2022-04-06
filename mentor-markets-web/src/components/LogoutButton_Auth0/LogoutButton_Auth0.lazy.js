import React, { lazy, Suspense } from 'react';

const LazyLogoutButton_Auth0 = lazy(() => import('./LogoutButton_Auth0'));

const LogoutButton_Auth0 = props => (
  <Suspense fallback={null}>
    <LazyLogoutButton_Auth0 {...props} />
  </Suspense>
);

export default LogoutButton_Auth0;
