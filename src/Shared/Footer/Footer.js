import React from 'react';
import { FaCopyright } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <section className='footer-container d-flex justify-content-center align-items-center '>
            <p className='m-0'><FaCopyright className='text-white'></FaCopyright> <span className='orange-font'>COPYRIGHT</span> 2022 by <span className='orange-font'>T</span>COURSE</p>
        </section>
    );
};

export default Footer;