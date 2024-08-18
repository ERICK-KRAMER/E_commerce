import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserProps {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    user: UserProps | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserProps>) {
            state.user = action.payload;
        },
        clearUser(state) {
            state.user = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
