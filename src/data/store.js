import { configureStore } from "@reduxjs/toolkit";
import tokenReducer from './userToken';

const store = configureStore({
    reducer: {
        auth: tokenReducer,
    },
});
export default store;