import { lazy } from 'react';
const Index = lazy(() => import('@/pages/Index'));
const Chart = lazy(() => import('@/pages/Chart'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/chart',
        element: <Chart />,
        layout: 'default',
    },
];

export { routes };
