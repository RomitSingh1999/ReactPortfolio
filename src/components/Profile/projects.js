import React,{useState} from 'react'
import "./projects.css"
// import ReactPlayer from "react-player"

export default function Projects(props) {


    const [projectData,setProjectData]= useState({
        id: props.id,
        projectName:props.projectName,
        shortDesc: props.shortDesc,
        fullDesc: props.fullDesc
    })
    
 
    
    return (
        <>
        <div className="card">
            <div className="project-heading" >
                {projectData.projectName}            
            </div>

            <div className="project-short-desc">
            {projectData.shortDesc} 
            </div>

            <div className="project-desc" >
            {projectData.fullDesc} 
            </div>

        </div>
        

        
        
        </>
        
    )
}
