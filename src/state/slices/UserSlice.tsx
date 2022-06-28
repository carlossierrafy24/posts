import { createSlice } from '@reduxjs/toolkit';

type UserType = {
    isAuthenticated: boolean;
    name: string;
    email: string;
};

const initialState: UserType = {
    isAuthenticated: true,
    name: '',
    email: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.name = action.payload.name;
            state.email = '';
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.name = '';
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
