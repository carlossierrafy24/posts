import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { login } from '../state/slices/UserSlice';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import { Provider } from 'react-redux';
import store from '.././state/store/index';

const SignIn: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const validatePasswordSecurity = (password: string) => {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long';
        }
        if (password.search(/[a-z]/i) < 0) {
            return 'Password must contain at least one letter';
        }
        if (password.search(/[0-9]/i) < 0) {
            return 'Password must contain at least one number';
        }
        return '';
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formEmail = e.currentTarget.email.value;
        const formPassword = e.currentTarget.password.value;
        const error = validatePasswordSecurity(formPassword);

        if (error === '') {
            dispatch(login({ name: formEmail.slice(0, formEmail.indexOf('@')) }));
        } else {
            Swal.fire({
                title: 'Error',
                text: error,
                icon: 'error',
                confirmButtonText: 'Ok'
            });
        }
    };

    return (
        <Provider store={store}>
            <div className="">
                <Link to="/" className="bg-white rounded-full hover:text-white hover:bg-cyan-800 m-5 p-1 text-ellipsis absolute px-4">
                    🔙 Back to home
                </Link>
            </div>
            <div className="flex bg-blue-300 h-screen items-center content-center">
                {user.isAuthenticated && <Navigate to="/" />}
                <div className="md:w-1/4 mx-auto">
                    <div className="lg:text-center">
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Sign In to access</p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Sign in with your email and password to continue.</p>
                    </div>
                    <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only" data-testid="email-address-label">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    data-testid="email-address"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only" data-testid="password-label">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    data-testid="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-cyan-800 hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Sign in ➡️
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Provider>
    );
};

export default SignIn;
