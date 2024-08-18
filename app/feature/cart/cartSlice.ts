import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ItemProps {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface CartState {
    items: ItemProps[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<ItemProps>) {
            state.items.push(action.payload);
        },
        removeItem(state, action: PayloadAction<number>) {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
