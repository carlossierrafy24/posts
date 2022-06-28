import React from 'react';
import Error404 from './404';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';

test('should render 404 page', () => {
    render(
        <Router>
            <Error404 />
        </Router>
    );
});
test('should a link to home page', () => {
    render(
        <Router>
            <Link to="/">home page</Link>
        </Router>
    );
});
