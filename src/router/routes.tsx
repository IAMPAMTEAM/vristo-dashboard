import { lazy } from 'react';
const Index = lazy(() => import('@/pages/Index'));
const Chart = lazy(() => import('@/pages/Chart'));
const Test = lazy(() => import('@/pages/Test'));
const UserTest = lazy(() => import('@/pages/UserTest'));
const RegionalResources = lazy(() => import('@/pages/Topology/RegionalResources'));
const Subnets = lazy(() => import('@/pages/Topology/Subnets'));
const SubnetRoutes = lazy(() => import('@/pages/Topology/SubnetRoutes'));
const VPCGateways = lazy(() => import('@/pages/Topology/VPCGateways'));
const LoadBalancers = lazy(() => import('@/pages/Topology/LoadBalancers'));
const VPCPeering = lazy(() => import('@/pages/Topology/VPCPeering'));
const Approval = lazy(() => import('@/pages/Approval'));

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
    {
        path: '/regional-resources',
        element: <RegionalResources />,
        layout: 'default',
    },
    {
        path: '/subnets',
        element: <Subnets />,
        layout: 'default',
    },
    {
        path: '/subnet-routes',
        element: <SubnetRoutes />,
        layout: 'default',
    },
    {
        path: '/vpc-gateways',
        element: <VPCGateways />,
        layout: 'default',
    },
    {
        path: '/load-balancers',
        element: <LoadBalancers />,
        layout: 'default',
    },
    {
        path: '/vpc-peering',
        element: <VPCPeering />,
        layout: 'default',
    },
    {
        path: '/approval',
        element: <Approval />,
        layout: 'default',
    },
];

export { routes };
