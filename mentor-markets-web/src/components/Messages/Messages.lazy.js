import React, { lazy, Suspense } from 'react';

const LazyMessages = lazy(() => import('./Messages'));

const Messages = props => (
  <Suspense fallback={null}>
    <LazyMessages {...props} />
  </Suspense>
);

export default Messages;
