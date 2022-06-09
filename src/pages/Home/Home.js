import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Extra from './Extra';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Extra></Extra>
            <Projects></Projects>
        </div>
    );
};

export default Home;