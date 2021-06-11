import React,{useState} from 'react'
import './Navbar.css'
import Login from "../Login/Login"
import {BrowserRouter as Router,Link} from 'react-router-dom'


const Navbar=(props)=>
{
    const {user,handlelogout}= props;
    const [navbar,setnavbar]=useState(true);
    const navClick=()=>{
        setnavbar(!navbar);
    }
    return (
        <div className="Nav">
            <div className="nav-bars">
                {navbar?(
                    <i className="fa fa-bars" onClick={navClick}/>
                ):(
                    <i className="fa fa-times" onClick={navClick}/>
                )}
                

                </div>
            <Router>
            <div className="nav-style">
            <a className="nav-style" href="/">Home</a>
            </div>
            <div className="nav-style">
            <a className="nav-style" href="/about">About</a>
            </div>
            <div className="nav-style">
            <a className="nav-style" href="/contact">Contact</a>
            </div>
            {user? (
                <>
            <div className="nav-style">
            <a className="nav-style" href="/admin">Admin</a>
            </div>
            <div className="nav-style">
            <a className="nav-style" onClick={handlelogout}>Logout</a>
            </div></>
            ):(<div className="nav-style">
            <a className="nav-style"href="/login">Login</a> 
            </div>)}
            
            <div className="nav-style">
            <a className="nav-style" href="/profile">Profile</a>
            </div>
            
            
            
            {/* <Link to="/" className="nav-style"><h3>Home</h3></Link>

            <Link to="/about" className="nav-style"><h3>About</h3></Link>
            <Link to="/contact" className="nav-style"><h3>Contact</h3></Link>
            <Link to="profile" className="nav-style"><h3>Profile</h3></Link> */}
            </Router>
          
            
        </div>
    )
}
export default Navbar;