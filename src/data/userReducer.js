
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    user: null,
};

const userReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        clearToken: (state) => {
            state.token = null;
            state.user = null;
            localStorage.removeItem("token");
        },
    },
});

export const { setUser, clearToken } = userReducer.actions;
//export const tokenItem = (state) => state.auth.token;


export default userReducer.reducer;
