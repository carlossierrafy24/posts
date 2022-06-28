import React from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { logout } from '../state/slices/UserSlice';
import Pagination from '../components/pagination/Pagination';
// components

export const ButtonWrapper: React.FC<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> = ({ ...props }) => {
    return (
        <button className="text-white text-xl font-semibold hover:bg-indigo-300 hover:rounded-md p-2" onClick={props.onClick}>
            Logout ⤵️
        </button>
    );
};

const Dashboard: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    // set page title as "Dashboard"
    document.title = 'Dashboard';

    const handleLogout = () => {
        dispatch(logout());
        // set page title back to "Home"
        document.title = 'Home';
    };

    return (
        <div>
            <nav className="flex justify-between items-center py-0 px-5 bg-indigo-500 h-16 top-0 left-0 right-0 z-0 fixed">
                <div className="text-xl font-semibold text-white">Dashboard</div>
                <div className="flex justify-between items-center">
                    <h5 className="text-lg text-white mr-2">{user.isAuthenticated && user.name}</h5>
                    <ButtonWrapper onClick={handleLogout} />
                </div>
            </nav>
            <div className="mt-14">
                <Pagination />
            </div>
        </div>
    );
};

export default Dashboard;
