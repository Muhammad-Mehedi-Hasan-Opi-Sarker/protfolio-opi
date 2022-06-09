import React from 'react';
import './Banner.css';
import opi from '../../../asset/picture/opi3.png';
const Banner = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 px-12' style={{backgroundColor:'lightgrey'}}>
            <div>
                <h1 className='text-6xl font-extrabold'>MEHEDI</h1>
                <h1>BANGLADESH</h1>
                <h3>Creative Web Developer</h3>
            </div>
            <div className='opi'>
                <img src={opi} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Banner;