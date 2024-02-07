import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/auth/authSlice"

import productReducer from "./features/client/clientSlice";
import memberReducer from "./features/member/memberSlice"
import filterReducer from "./features/client/filterSlice";


export const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
        filter: filterReducer,
        member: memberReducer,

    }
})