import { createSlice } from '@reduxjs/toolkit'

//interface
export interface OverviewState {
    payments: any,
    stats: [],
    allPayments: [],
    dailyTransactionVolume: string;
    dailyTransactionValue: string;
    totalTransactionVolume: string;
    totalTransactionValue: string;
    orders: any;
    statusType: [];
    monthTimeStamp: [];
    date: string;
    searchInput: string,
}

//initialState
const initialState: OverviewState = {

    payments: [],
    stats: [],
    allPayments: [],
    dailyTransactionValue: '',
    dailyTransactionVolume: '',
    totalTransactionValue: '',
    totalTransactionVolume: '',
    orders: {},
    statusType: [],
    monthTimeStamp: [],
    date: '',
    searchInput: '',



}

//slice
export const overViewSlice = createSlice({
    name: 'overview',
    initialState,
    reducers: {

        getStats: (state, action) => {

            state.stats = action.payload
        },
        getAllPayments: (state, action) => {

            state.allPayments = action.payload
        },
        getPayments: (state, action) => {

            state.payments = action.payload
        },
        getDailyTransactionVolume: (state, action) => {

            state.dailyTransactionVolume = action.payload
        },
        getDailyTransactionValue: (state, action) => {

            state.dailyTransactionValue = action.payload
        },
        getTotalTransactionVolume: (state, action) => {

            state.totalTransactionVolume = action.payload
        },
        getTotalTransactionValue: (state, action) => {

            state.totalTransactionValue = action.payload
        },
        getOrders: (state, action) => {

            state.orders = action.payload
        },
        getStatusType: (state, action) => {

            state.statusType = action.payload
        },
        getMonthTimeStamp: (state, action) => {

            state.monthTimeStamp = action.payload
        },
        getDate: (state, action) => {

            state.date = action.payload
        },
        setSearchInput: (state, action) => {
            state.searchInput = action.payload
        },


    },
})

export const { getStats, getAllPayments, getPayments, getDailyTransactionValue, getDailyTransactionVolume, getTotalTransactionValue, getTotalTransactionVolume, getOrders, getStatusType, getMonthTimeStamp, getDate, setSearchInput } = overViewSlice.actions

export default overViewSlice.reducer