import React from 'react';
import '../../pages/Home/Footer.css';
const Footer = () => {
    return (
        <div className='footer bg-primary'>
            <div className='lg:mt-8 lg:mb-8'>
                <h4 className='text-white font bold'>MEHEDI HASAN</h4>
                <h4 className='text-white font bold'>OPI</h4>
                <h4 className='text-white font bold'>Twitter</h4>
                <h4 className='text-white font bold'>Facebook</h4>
            </div>
            <div className='lg:mt-8 lg:mb-8'>
                <h4 className='text-white font bold'>Dhaka,Bangladesh</h4>
            </div>
            <div  className='lg:mt-8 lg:mb-8'>
                <h4 className='text-white font bold'>Email</h4>
                <h4 className='text-white font bold'>opisarker99@gmail.com</h4>
                <h4 className='text-white font bold'>Phone: 01849582451</h4>
            </div>
        </div>
    );
};

export default Footer;