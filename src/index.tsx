import { createRoot } from 'react-dom/client';
import React from 'react';
import Root from './Root';
import './index.css';
import store from './state/store/index';

const container = document.getElementById('root');
const root = createRoot(container!);

const Index = () => {
    return <Root store={store} />;
};

root.render(<Index />);
