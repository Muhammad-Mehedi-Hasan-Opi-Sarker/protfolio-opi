import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => {

    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:px-32 px-8 gap-5'>
            {/* parts  */}
            <div class="card opi lg:w-fit sm:w-fit bg-base-100 shadow-xl mt-5 sm:mt-8">
                <figure><img className='h-40' src='https://i.ibb.co/Nr8ZTKM/cart3-removebg-preview.png' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Parts manufacturer
                    </h2>
                    <p>This website is primarily for car parts dealers. With this website dealers
                         from different countries will be able to buy car parts.
                         Here everyone can buy car parts in a very good way.</p>
                    <div class="card-actions justify-end">
                        <Link to='/parts'>
                    <button className="btn btn-primary hover:bg-white hover:text-primary mt-4">Explore Now</button>
                    </Link>
                    </div>
                </div>
            </div>
            {/* house  */}
            <div class="card opi lg:w-fit sm:w-fit bg-base-100 shadow-xl mt-5 sm:mt-8">
                <figure><img className='h-40' src='https://i.ibb.co/tmvS8Wg/cart2-removebg-preview.png' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Revo Warehouse
                    </h2>
                    <p>This is the website for dealers. Dealers will be able to run their business with
                         this website. This website is fullstack completed. Mongodb has been used as 
                         database in this website. Login register etc. has been done here.
                         Email verification has been done here.</p>
                    <div class="card-actions justify-end">
                    <Link to='/house'>
                    <button className="btn btn-primary hover:bg-white hover:text-primary mt-4">Explore Now</button>
                    </Link>
                    </div>
                </div>
            </div>
            {/* gym  */}
            <div class="card opi lg:w-fit sm:w-fit bg-base-100 shadow-xl mt-5 sm:mt-8">
                <figure><img className='h-40' src='https://cdn2.iconfinder.com/data/icons/anxiety-mental-health/194/Excercise-256.png' alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                    Fitness
                    </h2>
                    <p>This is a gym trainer's website. This website is designed to facilitate the work 
                        of a personal gym trainer. This allows the client to hire a gym trainer.
                         And here the user will not be able to hire a trainer without login</p>
                    <div class="card-actions justify-end">
                    <Link to='/gym'>
                    <button className="btn btn-primary hover:bg-white hover:text-primary mt-4">Explore Now</button>
                    </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;