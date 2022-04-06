import React, { lazy, Suspense } from 'react';

const LazyAccount = lazy(() => import('./Account'));

const Account = props => (
  <Suspense fallback={null}>
    <LazyAccount {...props} />
  </Suspense>
);

export default Account;
