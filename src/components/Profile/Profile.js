import React,{useState,useEffect} from 'react'
import "./profile.css"
import Education from "./education"
import Projects from "./projects"
import ReactPlayer from "react-player"
import useSwr,{SWRConfig} from "swr"
import fire from "../Login/fire"
import axios from "axios"
const Profile=()=>{
    
    
    const database=fire.database()
    const adminDataJson= database.ref('admin/projects');
     var [items,setitems]=useState({})
    
    useEffect(()=>{
        
            adminDataJson.on('value',getitems=>{
                if(getitems.val()!=null)
                setitems({...getitems.val()})
            })
    },[])
        adminDataJson.on('value',(getitems)=>{
            items=getitems.val();
            
            
        })
    
    
    //console.log(itemlist ? (itemlist.map(e=>e.projectName)) : 'nothing')

    return (
        <>
    
        <div className="profile-container" >
        <div className="bg-image">
        <div className="profile-heading">
                <h2 >Welcome to my Profile</h2>
            </div>
            <div className="profile-items">
            <Education/>
            
            
            {
                Object.keys(items).map(id=>{
                    
                    
                    return(
                        <>
                        {items[id]?(
                        <Projects key={id} projectName={items[id].projectName} shortDesc={items[id].shortDesc} fullDesc={items[id].fullDesc}/>
                        ):
                        (<></>)
                    }
                        
                        </>
                    )
                    

                    })
            }
            
            </div>
            <div className="profile-heading">
            {/* <ReactPlayer controls url='https://www.youtube.com/watch?v=jxaQz2Wb2OU&ab_channel=ECE40RomitRanjanSingh' /> */}
            </div>

        </div>
        <div className="profile-ideas">

        </div>  
            
            
        </div>
        
        </>
        
    )
}
export default Profile;