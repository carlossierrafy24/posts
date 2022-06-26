import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './home/Home';
import SignIn from './signIn/SignIn';
import './index.css';
import Dashboard from './dashboard/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = function () {
    return (
        <Router>
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
