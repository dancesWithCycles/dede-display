import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <p>I am home. I have arrived.</p>
            <p>
                <Link to="/About">About</Link>
            </p>
            <p>
                <Link to="/Contact">Contact</Link>
            </p>
        </>
    );
};
export default Home;
