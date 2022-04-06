import React, { lazy, Suspense } from 'react';

const LazyBecomeAMentor = lazy(() => import('./BecomeAMentor'));

const BecomeAMentor = props => (
  <Suspense fallback={null}>
    <LazyBecomeAMentor {...props} />
  </Suspense>
);

export default BecomeAMentor;
