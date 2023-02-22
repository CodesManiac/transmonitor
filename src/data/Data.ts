import { AllOrders, AllPayments, ManualSettlement, Overview, PendingOrders, ReconcilledOrders, ReconcilledPayments, UnreconcilledPayments } from '../assets/icons'
import { HeaderType, SidebarType } from '../types/DataTypes'




export const headerData: HeaderType[] = [
    {
        id: 1,
        title: 'Support',
        url: '/',
        target: '_parent',

    },
    {
        id: 2,
        title: 'FAQ',
        url: '/',
        target: '_parent',

    }
];

export const mainData: SidebarType[] = [
    {
        id: 1,
        title: 'Overview',
        icon: Overview,
        route: 'overview',

    }
]
export const ordersData: SidebarType[] = [
    {
        id: 1,
        title: 'All Orders',
        icon: AllOrders,
        route: 'all-orders',


    },
    {
        id: 2,
        title: 'Pending Orders',
        icon: PendingOrders,
        route: 'pending-orders',


    },
    {
        id: 3,
        title: 'Reconcilled Orders',
        icon: ReconcilledOrders,
        route: 'reconcilled-orders',


    }
]
export const paymentsData: SidebarType[] = [
    {
        id: 1,
        title: 'All Payments',
        icon: AllPayments,
        route: 'all-payments',


    },
    {
        id: 2,
        title: 'Reconcilled Payments',
        icon: ReconcilledPayments,
        route: 'reconcilled-payments',


    },
    {
        id: 3,
        title: 'Un - Reconcilled Payments',
        icon: UnreconcilledPayments,
        route: 'unreconcilled-payments',


    },
    {
        id: 4,
        title: 'Manual Settlements',
        icon: ManualSettlement,
        route: 'manual-settlements',


    }
]




