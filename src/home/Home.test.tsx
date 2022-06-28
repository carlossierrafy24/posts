import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { Provider } from 'react-redux';
import store from '../../src/state/store/index';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

test('Title is Dashboard', () => {
    render(
        <Provider store={store}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );

    // buttons
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    // check if "Sign In" link is in the document
    expect(
        render(
            <Router>
                <Link to="signin" />
            </Router>
        )
    ).toBeTruthy();
    // check if "Dashboard" link is in the document after login
    expect(
        render(
            <Router>
                <Link to="dashboard" />
            </Router>
        )
    ).toBeTruthy();
});
