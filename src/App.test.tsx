import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/state/store';
import App from './App';
import Home from './home/Home';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders learn react link', () => {
    render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(document.title).toBe('Home');
    expect(
        render(
            <Provider store={store}>
                <Router>
                    <Home />
                </Router>
            </Provider>
        )
    ).toMatchSnapshot();
});
