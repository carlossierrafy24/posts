import React from 'react';
import NavBar from '../components/navBar/NavBar';

let pages: { link: string; text: string }[] = [
    { link: '', text: 'Home' },
    { link: 'signin', text: 'Sign In' }
];

const Home: React.FC = function () {
    return (
        <div>
            <NavBar pages={pages} />
            <div>
                <h1>Home</h1>
            </div>
        </div>
    );
};

export default Home;
