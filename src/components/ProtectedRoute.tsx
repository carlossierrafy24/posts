import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../state/hooks/hooks';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const user = useAppSelector((state) => state.user);
    let location = useLocation();

    if (!user.isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedRoute;
