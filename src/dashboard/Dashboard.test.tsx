import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dashboard, { ButtonWrapper } from './Dashboard';
import { Provider } from 'react-redux';
import store from '../../src/state/store/index';
import Pagination from '../../src/components/pagination/Pagination';
import reducer from '../../src/state/slices/UserSlice';
import { login, logout } from '../../src/state/slices/UserSlice';

type UserType = {
    isAuthenticated: boolean;
    name: string;
    email: string;
};

const user: UserType = {
    isAuthenticated: true,
    name: '',
    email: ''
};

test('Title is Dashboard', () => {
    render(
        <Provider store={store}>
            <Dashboard />
        </Provider>
    );

    // Expect nav elements to be in the document
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Logout ⤵️/i)).toBeInTheDocument();
    //  expect render Pagintaion component
    expect(render(<Pagination />)).toBeTruthy();
});

test('Handle logout', () => {
    const onClick = jest.fn();
    render(
        <Provider store={store}>
            <ButtonWrapper onClick={onClick} />
        </Provider>
    );
    const buttonElement = screen.getByText(/Logout ⤵️/i);
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
});
test('should return the initial user state', () => {
    // check if user is the initial state
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(user);
});

test('should handle a update when user signin and logout', () => {
    // user signin
    expect(reducer(user, login({ name: 'test' }))).toEqual({
        isAuthenticated: true,
        name: 'test',
        email: ''
    });
    // user logout
    expect(reducer(user, logout())).toEqual({
        isAuthenticated: false,
        name: '',
        email: ''
    });
});
