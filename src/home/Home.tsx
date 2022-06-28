import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { logout } from '../state/slices/UserSlice';

const Home: React.FC = (): JSX.Element => {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        user.isAuthenticated && dispatch(logout());
    };

    return (
        <div>
            <nav className="flex justify-between items-center py-0 px-5 fixed h-16 bg-indigo-500 top-0 left-0 right-0 z-1">
                <div className="flex justify-center items-center">
                    <div className="text-2xl font-bold text-white mr-3">Home</div>
                    <div>
                        {user.isAuthenticated && (
                            <Link to="/dashboard" className="text-white text-xl font-semibold hover:bg-indigo-300 hover:rounded-md py-1 px-2 mr-2">
                                Dashboard
                            </Link>
                        )}
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h5 className="text-lg text-white mr-2">{user.isAuthenticated && user.name}</h5>
                        <Link onClick={handleLogout} to={user.isAuthenticated ? '/' : '/signin'} className="text-white text-xl font-semibold hover:bg-indigo-300 hover:rounded-md px-2 py-1">
                            {user.isAuthenticated ? 'Logout ⤵️' : 'Signin ⤴️'}
                        </Link>
                    </div>
                </div>
            </nav>
            <div className="bg-white overflow-hidden mt-8 ml-6 flex justify-center items-center">
                <div className=" pb-72 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
                        <div className="sm:max-w-lg">
                            <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Posts & Comments</h1>
                            <p className="mt-4 text-xl text-gray-500">
                                React-Redux-Typescript application developed by{' '}
                                <a href="https://github.com/carlossierrafy24" className="text-blue-500">
                                    carlossierrafy24
                                </a>
                            </p>
                        </div>
                        <div>
                            <div className="mt-8">
                                {!user.isAuthenticated && (
                                    <Link
                                        to="/signin"
                                        className="inline-block text-center border border-transparent rounded-md py-3 px-8 font-medium text-white bg-cyan-800 hover:bg-cyan-600 focus:outline-none">
                                        Sign In ➡️
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div aria-hidden="true" className="pointer-events-none">
                        <img className="mx-auto" src="./image.png" width={'70%'} alt="stack" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
