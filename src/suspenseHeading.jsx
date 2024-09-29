import React, { Suspense, lazy } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const LazyHeading = lazy(() => import('./lazyHeading'));

function SuspenseHeading() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <LazyHeading />
    </Suspense>
  );
}

export default SuspenseHeading;
