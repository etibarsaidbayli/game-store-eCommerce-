import React, { Suspense } from 'react';


const LazyDetailsGamePage=React.lazy(()=>import('./DetailsGame'))

export default () => (
    <Suspense>
        <LazyDetailsGamePage/>
    </Suspense>
)