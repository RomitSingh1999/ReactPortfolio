import React,{useState} from 'react'
import "./projects.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
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
            <div className="card-img-top" src={{URL:"bg-image.jpg"}} alt="Card image cap" />
            <div className="card-title" style={{color:"white"}} >
                {projectData.projectName}            
            </div>

            <div className="card-body" style={{color:"white"}}>
            {projectData.shortDesc} 
            </div>

            <div className="card-text" style={{color:"white"}}>
            {projectData.fullDesc} 
            </div>

        </div>
        

        
        
        </>
        
    )
}
