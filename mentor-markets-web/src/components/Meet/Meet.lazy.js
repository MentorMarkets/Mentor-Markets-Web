import React, { lazy, Suspense } from 'react';

const LazyMeet = lazy(() => import('./Meet'));

const Meet = props => (
  <Suspense fallback={null}>
    <LazyMeet {...props} />
  </Suspense>
);

export default Meet;
