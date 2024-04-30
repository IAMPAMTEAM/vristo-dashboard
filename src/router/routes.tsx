import { lazy } from 'react';
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
const EntryContainer = lazy(() => import('@/pages/Entry/EntryContainer'));
const ChatContainer = lazy(() => import('@/pages/Chat/ChatContainer'));
const HR = lazy(() => import('@/pages/Users/HR'));
const UsersDevOps = lazy(() => import('@/pages/Users/UsersDevOps'))
const UsersApp = lazy(() => import('@/pages/Users/UsersApp'))
const UsersSaaS = lazy(() => import('@/pages/Users/UsersSaaS'))

const routes = [
    {
        path: '/',
        layout: 'blank',
        // element: <EntryContainer />,
    },
    {
        path: '/entry',
        element: <EntryContainer />,
        layout: 'blank',
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
    {
        path: '/users/hr',
        layout: 'default',
        element: <HR />,
    },
    {
        path: '/users/dev-ops',
        layout: 'default',
        element: <UsersDevOps />
    },
    {
        path: '/users/app',
        layout: 'default',
        element: <UsersApp />
    },
    {
        path: '/users/saas',
        layout: 'default',
        element: <UsersSaaS />
    },
    {
        path: '/chat',
        layout: 'default',
        element: <ChatContainer />,
    }
];

export { routes };
