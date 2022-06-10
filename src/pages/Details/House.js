import React from 'react';

const House = () => {
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
                <h1 className='lg:text-6xl sm:text-4xl lg:font-extrabold font-bold lg:mt-4 text-primary lg:mb-5'>Revo Warehouse</h1>
                    <p>This is the website for dealers. Dealers will be able to run their business
                         with this website. This website is fullstack completed. Mongodb has been used
                          as database in this website. Login register etc.
                         has been done here. Email verification has been done here.</p>
                    
                    <h2 className='text-4xl font-bold text-primary'>Features</h2>
                        <li>This project use in Mongodb and heroku.</li>
                        <li>Home page show some things products.</li>
                        <li>Here I work with react , react bootstrap , bootstrap.</li>
                        <li>This website work add product and delete product.</li>
                        <li>firebase, react firebase hooks, react router etc. This project was bootstrapped with Create React App.</li>
                    
                </div>
            </div>
        </div>
        </div>
    );
};

export default House;