import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { logout } from '../state/slices/UserSlice';

const Dashboard: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    return (
        <div>
            <div className="container">
                <div className="user">{user.isAuthenticated ? <h2>Current user is {user.name}</h2> : ''}</div>
                <div className="action-buttons">
                    <button
                        className="logout"
                        onClick={(e) => {
                            dispatch(logout());
                        }}>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
