import React,{useState} from 'react'
import "./projects.css"

export default function Projects() {


    const [projectData,setProjectData]= useState({
        Data:"hello there mate"
    })
    console.log(projectData.Data.length);
    return (
        <>
        <div className="card">
            <div className="project-heading">
                Projects            
            </div>

            <div className="project-short-desc">

            </div>

            <div className="project-desc">
                {projectData.Data.length ? projectData.Data :<h4>Nothing here for you</h4>}
            </div>
        </div>
        
        
        </>
        
    )
}
