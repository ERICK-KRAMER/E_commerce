import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface ItemProps {
    id: number;
    name: string;
    decription: string;
    price: number;
}

interface CartStore {
    items: ItemProps[]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) { },
        removeItem(state, action) { },
    }
});

export const store = configureStore({
    reducer: {
        // Add your reducers here

    }
});


export type RootState = ReturnType<typeof store.getState>;

export type AppUseDispatch = ReturnType<typeof store.dispatch>;