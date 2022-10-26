import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container-all height'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1>404 Not Found.</h1>
                <Link to='/'>back to home</Link>
            </div>
        </div>
    );
};

export default NotFound;