import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/user'
import teamReducer from './slice/team'

export const store = configureStore({
    reducer: {
        user: userReducer, 
        team:teamReducer       
    },

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch