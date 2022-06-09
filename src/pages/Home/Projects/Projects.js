import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setProjects(data))
    },[])
     return (
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 lg:px-32 px-5 gap-5'>
            {
                projects.map(project=><Project
                key={project.id}
                project={project}
                ></Project>)
            }
        </div>
    );
};

export default Projects;