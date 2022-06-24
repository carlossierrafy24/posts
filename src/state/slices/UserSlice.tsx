import { createSlice } from '@reduxjs/toolkit';

type UserType = {
    isAuthenticated: boolean;
    name: string;
};

const initialState: UserType = {
    isAuthenticated: true,
    name: 'Jonh Doe'
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
            state.name = 'John Doe';
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.name = '';
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
