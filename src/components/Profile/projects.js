import React,{useState} from 'react'
import "./projects.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Typed from "react-typed"
import {FaGithub} from "react-icons/fa";

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
            
            <div className="card-title" style={{color:"rgb(19,25, 110)",fontSize:"2rem",fontWeight:"bold"}} >
                <a href="https://github.com/RomitSingh1999/ReactPortfolio"><span><FaGithub color="white" /></span></a><Typed
                strings={[projectData.projectName]}
                typeSpeed={100}
                backSpeed={10}
                loop
                />
                
                            
            </div>

            <div className="card-body">
            {projectData.shortDesc} 
            </div>

            <div className="card-text" >
            {projectData.fullDesc} 
            </div>

        </div>
        

        
        
        </>
        
    )
}
