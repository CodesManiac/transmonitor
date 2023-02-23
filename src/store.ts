import { configureStore } from '@reduxjs/toolkit'
import overviewReducer from './slices/overViewSlice'
import userReducer from './slices/userSlice'


export const store = configureStore({
    reducer: {
        overview: overviewReducer,
        user: userReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch