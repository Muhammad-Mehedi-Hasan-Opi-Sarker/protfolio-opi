import React from 'react';

const Parts = () => {
    return (
        <div className='lg:px-32 px-8 bg-secondary mt-12'>
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
        </div>
    );
};

export default Parts;