import React from 'react';
import { Link } from 'react-router-dom';

const Error404: React.FC = function () {
    return (
        <div className="flex bg-blue-300 h-screen items-center content-center">
            <div className="w-1/4 mx-auto">
                <div className="lg:text-center">
                    <p className="mt-2 text-9xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-8xl">404</p>
                    <p className="mt-2 text-6xl leading-5 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Page not found</p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Sorry,
                        <br />
                        the page you are looking for does not exist. Try to go to the
                        <br />
                        <Link to="/" className="text-blue-500 hover:text-blue-700">
                            home page
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
export default Error404;
