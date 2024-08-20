
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

const userToken = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = null;
        },
    },
});

export const { setToken, clearToken } = userToken.actions;
export const tokenItem = (state) => state.auth.token;


export default userToken.reducer;
