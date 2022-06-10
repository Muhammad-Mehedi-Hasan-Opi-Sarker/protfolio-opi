import React from 'react';

const Gym = () => {
    return (
        <div>
            <div className='lg:px-32 px-8 mt-12'>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">
                        <img src="https://i.ibb.co/M2KcRnL/gym1.png" alt='' class="w-full" />
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <img src="https://i.ibb.co/3CBLHBd/gym2.png" alt='' class="w-full" />
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <img src="https://i.ibb.co/mzQmMW3/gym3.png" alt='' class="w-full" />
                    </div>

                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a href="#item1" class="btn btn-xs">1</a>
                    <a href="#item2" class="btn btn-xs">2</a>
                    <a href="#item3" class="btn btn-xs">3</a>
                </div>
                <div class="card w-fit bg-base-100 shadow-xl">
                    <div class="card-body">
                        <h1 className='lg:text-6xl sm:text-4xl lg:font-extrabold font-bold lg:mt-4 text-primary lg:mb-5'>Fitness</h1>
                        <p>This is a gym trainer's website. This website is designed to facilitate the work of
                            a personal gym trainer. This allows the client to hire a gym trainer.
                            And here the user will not be able to hire a trainer without login</p>

                        <h2 className='text-4xl font-bold text-primary'>Features</h2>
                        <li>This project makes by react.</li>
                        <li>This project is designed by react-bootstrap</li>
                        <li>Here I work with react , react bootstrap , bootstrap.</li>
                        <li>Here I work with vanilla javascript and css.</li>
                        <li>This project works for a Gym Tainer.</li>
                        <div className='flex gap-4'>
                        <div><h1 className='font-bold text-primary'><a href="https://sprightly-cranachan-d3a91e.netlify.app/">Live site</a></h1></div>
                        <div><h1 className='font-bold text-primary'><a href="https://github.com/Muhammad-Mehedi-Hasan-Opi-Sarker/gym-tainer">Code Link</a></h1></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gym;