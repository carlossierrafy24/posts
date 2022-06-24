import { Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../state/hooks/hooks';
import { login } from '../state/slices/UserSlice';

const SignIn: React.FC = function () {
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    return (
        <div>
            <div className="container">
                {user.isAuthenticated && <Navigate to="/dashboard" />}
                <h1>Click the button to login</h1>
                <div className="action-buttons">
                    <button
                        className="login"
                        onClick={(e) => {
                            dispatch(login());
                        }}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
