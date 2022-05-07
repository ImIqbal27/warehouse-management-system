import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='custom-footer-section '>

            <p className='text-center text-white  footer-copyright'>
                Copyright &copy; {year}, By Md Iqbal Hasan Rumon . All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;