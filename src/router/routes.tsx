import { lazy } from 'react';
const Index = lazy(() => import('@/pages/Index'));
const Frame = lazy(() => import('@/pages/Frame'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/frame',
        Element: <Frame />,
        layout: 'default',
    },
];

export { routes };
