import React, { Suspense } from 'react';


const LazyHomePage = React.lazy(() => import('./HomePage'))

export  default () => (
    <Suspense>
        <LazyHomePage/>
    </Suspense>
)