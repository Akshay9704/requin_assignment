import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/auth-slice"
import sellerProductsSlice from "../store/seller-slice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        sellerProducts: sellerProductsSlice,
    }
})

export default store;