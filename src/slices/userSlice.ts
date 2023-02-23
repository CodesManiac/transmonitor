import { createSlice } from '@reduxjs/toolkit'

//interface
export interface UserState {
    user: any,
    notifications: number
}

//initialState
const initialState: UserState = {

    user: [],
    notifications: 3,

}

//slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        getUser: (state, action) => {

            state.user = action.payload
        },
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },



    },
})

export const { getUser, setNotifications } = userSlice.actions

export default userSlice.reducer