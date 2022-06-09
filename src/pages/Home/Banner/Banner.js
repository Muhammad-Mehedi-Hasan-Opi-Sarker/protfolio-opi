import React from 'react';
import opi from '../../../asset/picture/opi3.png';
import Navbar from '../../Navbar/Navbar';
const Banner = () => {
    return (
        <div className='bg-secondary'>
            <Navbar></Navbar>
            <div className='grid justify-items-center lg:grid-cols-2 sm:grid-cols-1 px-12 mt-6'>
            <div className='lg:mt-32 sm:mt-2'>
                <h1 className='lg:text-6xl sm:text-6xl lg:font-extrabold sm:font-bold lg:mt-4'>MEHEDI</h1>
                <h1 className='lg:text-6xl sm:text-6xl lg:font-extrabold sm:font-bold lg:mt-4'>BANGLADESH</h1>
                <h3 className='lg:mt-4'>Creative Web Developer</h3>
                </div>
            <div className='opi'>
                <img className='h-auto' src={opi} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;