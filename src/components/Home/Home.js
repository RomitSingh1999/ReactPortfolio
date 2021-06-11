import React,{useState} from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
import profile from "./8WGn.png"
import Typed from "react-typed"
const Home=()=>{
    const Imgobj="1G-Computer_ScienceCsIT_Software_Engineering.png"
    const [reactflag,setreactflag]=useState("")
    const [djangoflag,setdjangoflag]=useState("")
    const [compflag,setcompflag]=useState("")
    const clearflags=()=>{
        setreactflag("");
        setdjangoflag("");
        setcompflag("")
    }
    const reactHandler=()=>{
        clearflags();
        const stringelement = "This is react handler which activates when you click on React";
        setreactflag(stringelement);
        return;
    }
    const djangoHandler=()=>{
        clearflags();
        const stringelement = "DJango This is react handler which activates when you click on React";
        setdjangoflag(stringelement);
        return 
    }
    const compHandler=()=>{
        clearflags();
        const stringelement = "comp This is react handler which activates when you click on React";
        setcompflag(stringelement);
        return 
    }
    
    return (
        <>
        
        <div className="Container">
            <div className="heading"> 
                <div className="profile-imgcont">
                    <div className="profile-image"><p >Romit Singh</p></div>
                
                </div>
                
                
            </div>
           
            <div className="container">
                <div className="skills-element">
                
                <span onClick={reactHandler}>React</span>
                <span onClick={djangoHandler}>Django</span>
                <span onClick={compHandler}>Competative Programing</span>
                </div>
                
                <div className="w3-container w3-center w3-animate-opacity">
                    {reactflag?(
                        <div className="card" style={{background:"black",opacity:"0.7"}} >
                            <Typed
                            strings={Array(reactflag)}
                            typeSpeed={100}
                            backSpeed={10}
                            
                            />
                        </div>
                    ):(<></>)}
                    {djangoflag?(
                        <div className="card" style={{background:"black",opacity:"0.7"}} >
                            <Typed
                            strings={Array(djangoflag)}
                            typeSpeed={100}
                            backSpeed={10}
                            
                            />
                        </div>
                    ):(<></>)}
                    {compflag?(
                        <div className="card" style={{background:"black",opacity:"0.7"}} >
                            
                            <Typed
                            strings={Array(compflag)}
                            typeSpeed={100}
                            backSpeed={10}
                            />
                        </div>
                    ):(<></>)}
                

                </div>
                
                
            </div>
            </div>
        
    
        
        
        
        </>
    )
}
export default Home;