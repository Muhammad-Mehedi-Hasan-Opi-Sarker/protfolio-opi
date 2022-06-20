import React from 'react';
import '../../pages/Home/Footer.css';
const Footer = () => {
    return (
        <div className='footer bg-primary'>
            <div className='lg:mt-8 lg:mb-8 ml-4'>
                <h4 className='text-white font bold'>MEHEDI HASAN</h4>
                <a className="link link-hover text-white font bold">OPI</a>
                <a href='https://twitter.com/MehediHasanOpi1' className="link link-hover text-white font bold">Twitter</a>
                <a href='https://www.linkedin.com/in/opi-sarker-398b06193/' className="link link-hover text-white font bold">Linkedin</a>
                
            </div>
            <div className='lg:mt-8 lg:mb-8 ml-4'>
                <h4 className='text-white font bold'>Dhaka,Bangladesh</h4>
            </div>
            <div  className='lg:mt-8 lg:mb-8 ml-4'>
                <h4 className='text-white font bold'>Email</h4>
                <h4 className='text-white font bold'>opisarker99@gmail.com</h4>
                <h4 className='text-white font bold'>Phone: 01849582451</h4>
                <a href='https://github.com/Muhammad-Mehedi-Hasan-Opi-Sarker' className="link link-hover text-white font bold">Git Hub</a>
            </div>
        </div>
    );
};

export default Footer;