import React from 'react';
import './Project.css';

const Project = ({project}) => {
    const {name,description,img} = project;
        return ( 
        <div class="card opi lg:w-fit sm:w-fit bg-base-100 shadow-xl mt-5 sm:mt-8">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {name}
                </h2>
                <p>{description}</p>
                <div class="card-actions justify-end">
                <button className="btn btn-primary hover:bg-white hover:text-primary mt-4">
                            Explore Now
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Project;