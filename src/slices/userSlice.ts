import { createSlice } from '@reduxjs/toolkit'

//interface
export interface UserState {
    user: any,

}

//initialState
const initialState: UserState = {

    user: [],

}

//slice
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        getUser: (state, action) => {

            state.user = action.payload
        },



    },
})

export const { getUser } = userSlice.actions

export default userSlice.reducer