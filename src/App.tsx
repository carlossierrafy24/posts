import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Home from './home/Home';
import SignIn from './signIn/SignIn';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = function () {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/signin">Sign In</Link>
            </nav>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<div>404</div>} />
                </Routes>
            </Fragment>
        </Router>
    );
};

export default App;
