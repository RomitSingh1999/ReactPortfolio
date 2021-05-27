import './App.css';
import React,{useState} from 'react';
// import Layout from './components/Layout/layout';
// import Burger from './components/Burger/Burger';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'
import About from './components/About/About'
// import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Testform from './components/Forms/testform'
import Login from './components/Login/Login'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import fire from './components/Login/fire';

const App=(props)=>{

        const [user,setuser]=useState('')
        
        
        const authListener=()=>{
            fire.auth().onAuthStateChanged((user)=>{
                if(user)
                {
                   
                    setuser(user);
                }
                else
                setuser("");
            })
        }
          
        return (
            <Router>
            <div className = "App" >
                    
                    <Navbar/>
                    <Switch>
                    
                        <Route path="/" exact >
                            <div className="Container">
                               {console.log(user)} 
                            <Login/>
                             
                            
                            </div>
                               
                        </Route>
                        <Route path="/about">
                        <div className="Container">
                            <About/> 
                            </div>
                        </Route>
                        <Route path="/contact" >
                        <div className="Container">
                        <Testform/>
                            </div>
                        
                        </Route>
                        <Route path="/profile" >
                        <div className="Container">
                        <Profile/>
                            </div>
                        </Route>
                    </Switch>
                               
            
                
            </div>
            </Router>
        );
    }
         

export default App;