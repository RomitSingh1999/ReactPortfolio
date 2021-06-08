import React,{useState} from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Home.css"
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
        return (
            
            <>
                <div className="card" style={{background:"none"}} >
                    <Typed
                    strings={[stringelement]}
                    typeSpeed={100}
                    backSpeed={10}
                    loop
                    />
                    {console.log("Typed....")}
                </div>
            </>
        )
    }
    const djangoHandler=()=>{
        clearflags();
        const stringelement = "DJango This is react handler which activates when you click on React";
        setdjangoflag(stringelement);
        return (
            
            <>
                <div className="card" style={{background:"none"}} >
                    <Typed
                    strings={[stringelement]}
                    typeSpeed={100}
                    backSpeed={10}
                    loop
                    />
                    {console.log("Typed....")}
                </div>
            </>
        )
    }
    const compHandler=()=>{
        clearflags();
        const stringelement = "comp This is react handler which activates when you click on React";
        setcompflag(stringelement);
        return (
            
            <>
                <div className="card" style={{background:"none"}} >
                    <Typed
                    strings={[stringelement]}
                    typeSpeed={100}
                    backSpeed={10}
                    loop
                    />
                    {console.log("Typed....")}
                </div>
            </>
        )
    }
    return (
        <>
        
        <div className="Container">
            <div className="heading">
                <h2>Hello there Mate</h2>
                <span>Welcome, let us start our trip</span>
            </div>
            <div className="container">
                <div className="skills-element">
                <span onClick={reactHandler}>React</span>
                <span onClick={djangoHandler}>Django</span>
                <span onClick={compHandler}>Competative Programing</span>
                </div>
                
                <div className="w3-container w3-center w3-animate-opacity">
                    {reactflag?(
                        <div className="card" style={{background:"none"}} >
                            {reactflag}
                        </div>
                    ):(<></>)}
                    {djangoflag?(
                        <div className="card" style={{background:"none"}} >
                            {djangoflag}
                        </div>
                    ):(<></>)}
                    {compflag?(
                        <div className="card" style={{background:"none"}} >
                            {compflag}
                        </div>
                    ):(<></>)}
                

                </div>
                
            </div>
        </div>
    
        
        
        
        </>
    )
}
export default Home;