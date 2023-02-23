export interface HeaderType {
    id: number;
    title: string;
    url: string;
    target: string;

}
export interface SidebarType {
    id: number;
    title: string;
    icon: string;
    route: string;

}
export interface StatsCardType {
    id: number;
    title: string;
    image: string;
    amount: string;

}
export interface PaymentsType {
    item_type: string;
    price: string;
    transaction_number: string;
    time: string;
    status: string;
}

