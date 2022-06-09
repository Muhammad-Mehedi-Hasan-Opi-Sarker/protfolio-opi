import React from 'react';
import opi2 from '../../../asset/picture/opi2.jpg';
const About = () => {
    return (
        <div className='mt-20 grid lg:grid-cols-2 sm:grid-cols-1 lg:px-32 px-8' id='about'>
            <div className='lg:mt-8'>
                <img className='lg:h-3/5' src={opi2} alt="" />
            </div>
            <div className='mt-3'>
                <h1 className='lg:text-6xl sm:text-4xl lg:font-extrabold font-bold lg:mt-4 text-primary lg:mb-5'>MEHEDI HASAN OPI</h1>
                <h1 className='lg:text-6xl sm:text-4xl lg:font-extrabold font-bold lg:mt-4 text-primary lg:mb-5'>BANGLADESH</h1>
                <h1 className='mt-3 lg:mb-5 mb-3'>Creative Web Developer</h1>
                <p>
                    My name is Mehedi Hasan Opi. I am a Web Developer, and I'm very
                     passionate and dedicated to my work. 
                    I have acquired the skills and
                    knowledge necessary to make your project a success.
                     I enjoy every step of the design
                    process, from discussion and collaboration.
                </p>
                <button className="btn btn-primary hover:bg-white hover:text-primary mt-4">
                            Learn More
                        </button>
            </div>
        </div>
    );
};

export default About;