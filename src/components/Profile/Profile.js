import React,{useState,useEffect} from 'react'
import "./profile.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Education from "./education"
import Projects from "./projects"
import ReactPlayer from "react-player"
import useSwr,{SWRConfig} from "swr"
import fire from "../Login/fire"
import axios from "axios"
import {RiHome4Line} from "react-icons/ri";
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
    
        <div className="container" style={{background:"linear-gradient(rgb(93, 168, 243),#fff)"}}>
        <div className="bg-image">
        <div className="profile-heading">
                <span><RiHome4Line /></span> | Welcome to my Profile
            </div>
            <div className="container">
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