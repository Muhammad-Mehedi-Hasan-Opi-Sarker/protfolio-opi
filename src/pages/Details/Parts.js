import React from 'react';
import Footer from '../Home/Footer';

const Parts = () => {
    return (
       <div>
         <div className='lg:px-32 px-8 mt-12'>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src="https://i.ibb.co/mznN7j5/parts1.png" alt='' class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src="https://i.ibb.co/12qZ6GW/parts2.png" alt='' class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src="https://i.ibb.co/JpLz2c9/parts3.png" alt='' class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src="https://i.ibb.co/BNg08Cj/parts4.png" alt='' class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
            <div class="card w-fit bg-base-100 shadow-xl">
                <div class="card-body">
                <h1 className='lg:text-6xl sm:text-4xl lg:font-extrabold font-bold lg:mt-4 text-primary lg:mb-5'>Parts manufacturer</h1>
                    <p>This website is primarily for car parts dealers. With this website
                    dealers from different countries will be able to buy car parts.
                    Here everyone can buy car parts in a very good way.</p>
                    
                    <h2 className='text-4xl font-bold text-primary'>Features</h2>
                        <li>This project use in Mongodb and heroku.</li>
                        <li>Home page show some things products.</li>
                        <li>Any user can give a review.</li>
                        <li>Users can easily order products.</li>
                        <li>All users data will saved in database.</li>
                    <div className='flex gap-4'>
                        <h1 className='font-bold text-primary'><a href="https://parts-manufacturer-6301a.web.app">Live Site</a></h1>
                        <h1 className='font-bold text-primary'><a href="https://github.com/Muhammad-Mehedi-Hasan-Opi-Sarker/parts-manufacturer-website-client-side">Client Code</a></h1>
                        <h1 className='font-bold text-primary'><a href="https://github.com/Muhammad-Mehedi-Hasan-Opi-Sarker/parts-manufacturer-website-server-side">Server Code</a></h1>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Parts;