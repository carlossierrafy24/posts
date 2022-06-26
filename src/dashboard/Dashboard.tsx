import React from 'react';
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { logout } from '../state/slices/UserSlice';
import Posts from '../components/posts/Posts';
// components

const Dashboard: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    return (
        <div>
            <nav>
                <div className="dashboard dashboard-nav-logo">
                    <div>Dashboard {user.isAuthenticated ? <h2>Wellcome {user.name}</h2> : ''}</div>
                </div>
                <button
                    className="logout"
                    onClick={(e) => {
                        dispatch(logout());
                    }}>
                    Logout
                </button>
            </nav>
            <div className="">
                <Posts />
            </div>
        </div>
    );
};

export default Dashboard;
