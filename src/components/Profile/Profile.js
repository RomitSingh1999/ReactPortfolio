import React from 'react'
import "./profile.css"
import Education from "./education"
import Projects from "./projects"
import Container from 'react-bootstrap/Container'
const Profile=()=>{
    return (
        <>
        
        <div className="profile-container" >
        <div className="bg-image">
        <div className="profile-heading">
                <h2 >Welcome to my Profile</h2>
            </div>
            <div className="profile-items">
            <Education/>
            <Projects/>
            </div>
        </div>
        <div className="profile-ideas">

        </div>  
            
            
        </div>
        
        </>
        
    )
}
export default Profile;