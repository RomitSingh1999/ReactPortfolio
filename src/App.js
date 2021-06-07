import './App.css';
import React,{useState} from 'react';
// import Layout from './components/Layout/layout';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Home from './components/Home/Home'
import About from './components/About/About'
import Admin from './components/Admin/Admin'

// import Contact from './components/Contact/Contact'
import Profile from './components/Profile/Profile'
import Testform from './components/Forms/testform'
import Login from './components/Login/Login'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import fire from './components/Login/fire';


const App=(props)=>{
    const data=JSON.stringify(fire.auth());
    const newdata=JSON.parse(data)
        const [user,setuser]=useState('')
        console.log(newdata.currentUser? ("user exist"):("user doesnot exist"))
        
        
            fire.auth().onAuthStateChanged((user)=>{
                if(user)
                {
                   
                    setuser(user);
                }
                else
                setuser("");
            })
            
            const handlelogout=()=>{
                fire.auth().signOut();
            };
        
          
        return (
            <Router>
                <Navbar user={user} handlelogout={handlelogout}/>
            <div className = "App" >
                            <div className="app-Container">
                                
                                        
                                </div>
                    
                    
                    <Switch>
                    
                        <Route exact path="/"  >
                            <div className="app-Container">
                                
                            <Home/>
                                    
                            </div>
                               
                        </Route>
                        <Route path="/login">
                            {user?(<></>):(<div className="app-Container">
                            <Login/>
                            </div>)}
                        
                            
                        </Route>
                        <Route path="/admin">
                        <div className="app-Container">
                            <Admin/> 
                            </div>
                        </Route>
                        <Route path="/about">
                        <div className="app-Container">
                            <About/> 
                            </div>
                        </Route>
                        <Route path="/contact" >
                        <div className="app-Container">
                        <Testform/>
                            </div>
                        
                        </Route>
                        <Route path="/profile" >
                        <div className="app-Container">
                        <Profile/>
                            </div>
                        </Route>
                    </Switch>
                               
            
                
            </div>
            </Router>
        );
    }
         

export default App;