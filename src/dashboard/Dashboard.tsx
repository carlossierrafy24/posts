import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { logout } from '../state/slices/UserSlice';
// components

const Dashboard: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    return (
        <div>
            <nav>
                <div className="dashboard">Dashboard</div>
                <button
                    className="logout"
                    onClick={(e) => {
                        dispatch(logout());
                    }}>
                    Logout
                </button>
            </nav>
            <div className="">
                <div className="user">{user.isAuthenticated ? <h2>Current user is {user.name}</h2> : ''}</div>
            </div>
        </div>
    );
};

export default Dashboard;
