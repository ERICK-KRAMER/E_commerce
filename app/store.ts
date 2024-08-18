import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/app/feature/user/userSlice";
import cartReducer from "@/app/feature/cart/cartSlice";


export const store = configureStore({
    reducer: {
        // Add your reducers here
        user: userReducer,
        cart: cartReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppUseDispatch = ReturnType<typeof store.dispatch>;