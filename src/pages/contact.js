import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <>
            <h2>Contact</h2>
            <p>
        Email: <a href="mailto:begerad@vbn.de">Stefan Begerad</a>
            </p>
            <p>
                <Link to="/">Home</Link>{' '}
            </p>
        </>
    );
};
export default Contact;
