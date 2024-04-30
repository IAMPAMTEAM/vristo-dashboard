import Chat from '@/pages/Chat';
import { lazy } from 'react';
const Index = lazy(() => import('@/pages/Index'));
const Chart = lazy(() => import('@/pages/Chart'));
const Test = lazy(() => import('@/pages/Test'));
const UserTest = lazy(() => import('@/pages/UserTest'));

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
    {
        path: '/test',
        element: <Test />,
        layout: 'default',
    },
    {
        path: '/user-test',
        element: <UserTest />,
        layout: 'default',
    },
];

export { routes };
