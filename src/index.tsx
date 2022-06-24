import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './state/store/index';

const container = document.getElementById('root');
const root = createRoot(container!);

const Index = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <App />
            </Provider>
        </React.Fragment>
    );
};

root.render(<Index />);
