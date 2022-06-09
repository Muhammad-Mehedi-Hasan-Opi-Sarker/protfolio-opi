import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contract from './Contract/Contract';
import Input from './Contract/Input';
import Extra from './Extra';
import Footer from './Footer';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Extra></Extra>
            <Projects></Projects>
            <Input></Input>
            <Contract></Contract>
            <Footer></Footer>
        </div>
    );
};

export default Home;