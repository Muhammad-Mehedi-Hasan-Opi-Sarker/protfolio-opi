import React from 'react';
import opi2 from '../../../asset/picture/opi2.jpg';
const About = () => {
    return (
        <div className='mt-20 grid lg:grid-cols-2 sm:grid-cols-1 lg:px-24 px-4'>
            <div>
                <img className='lg:h-2/4' src={opi2} alt="" />
            </div>
            <div className='mt-3'>
                <h1 className='lg:text-6xl sm:text-6xl lg:font-extrabold font-bold lg:mt-4 text-primary'>MEHEDI BANGLADESH</h1>
                <h1>Creative Web Developer</h1>
                <p>
                    My name is Mehedi Hasan Opi. I am a Web Developer, and I'm very
                     passionate and dedicated to my work. 
                    I have acquired the skills and
                    knowledge necessary to make your project a success.
                     I enjoy every step of the design
                    process, from discussion and collaboration.
                </p>
            </div>
        </div>
    );
};

export default About;