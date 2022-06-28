import React from 'react';
import { Provider } from 'react-redux';
import App from './App';

type Props = {
    store: any;
};

export default function Root({ store }: Props) {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
