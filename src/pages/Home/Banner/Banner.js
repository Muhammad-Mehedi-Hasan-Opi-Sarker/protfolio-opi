import React from 'react';
import './Banner.css';
import pic2 from '../../../asset/picture/pic3.png';
import resume from '../../../asset/picture/resume.PNG';
import Navbar from '../../Navbar/Navbar';
const Banner = () => {
    return (
        <div className='bg-secondary'>
            <Navbar></Navbar>
            <div className='grid justify-items-center lg:grid-cols-2 sm:grid-cols-1 mt-6'>
                <div className='lg:mt-32 sm:mt-2 sm:flex-row'>
                    <div>
                        <h1 className='hey lg:text-6xl sm:text-6xl lg:font-extrabold font-bold lg:mt-4 lg:text-white'>MEHEDI</h1>
                        <h1 className='lg:text-6xl sm:text-6xl lg:font-extrabold font-bold lg:mt-4 text-primary'>BANGLADESH</h1>
                        <h3 className='lg:mt-4 text-primary'>Creative Web Developer</h3>
                    </div>
                    <div className='sm:mb-4'>
                        <a href={resume} download className="btn btn-primary hover:bg-white hover:text-primary rounded-full ... mt-4">
                            Download cv
                        </a>
                    </div>
                </div>
                <div className='p-8'>
                    <img className='lg:h-auto' src={pic2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;