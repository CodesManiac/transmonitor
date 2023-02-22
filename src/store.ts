import { configureStore } from '@reduxjs/toolkit'
import overviewReducer from './slices/overViewSlice'


export const store = configureStore({
    reducer: {
        overview: overviewReducer,

    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch