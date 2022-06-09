import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setProjects(data))
    },[])
     return (
        <div>
            <h1>project</h1>
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