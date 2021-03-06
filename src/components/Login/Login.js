import React,{useState,useEffect} from 'react'
import fire from './fire'
import {BrowserRouter as Route,Switch,Redirect} from "react-router-dom"
import "./Login.css"
// import axios from 'axios'


const Login=()=>{
    const [user,setuser]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [emailerr,setemailerr]=useState('')
    const [passworderr,setpassworderr]=useState('')
    const [hasaccount,sethasaccount]=useState('')

    const clearinputs=()=>{
        setemail("");
        setpassword("");
    }
    const clearerrors=()=>{
        setemailerr("");
        setpassworderr("");
    }

    const handlelogin=()=>{
        clearerrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email,password)
        .catch((err)=>{
            switch(err.code)
            {
                case "auth/invalid-email":
                case "auth/user-disabled":
                    setemailerr(err.message);
                    break;
                case "auth/wrong-password":
                    setpassworderr(err.message);
                    break;
                default:
            }
        })

    };

    const handlesignup=()=>{
        clearerrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email,password)
        .catch((err)=>{
            console.log(err)
            switch(err.code)
            {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setemailerr(err.message);
                    break;
                case "auth/weak-password":
                    setpassworderr(err.message);
                    break;
                default:

                    
            }
        })

    };

    const handlelogout=()=>{
        fire.auth().signOut();
    };
    const authListener=()=>{
        fire.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                clearinputs();
                setuser(user);
            }
            else
            setuser("");
        })
    }

    useEffect(() => {
        authListener();
        
    });


console.log(JSON.stringify(fire.auth()).currentUser);
return(
    
    <div className="login-container">
        {user ? (
            <>
               <Route>
                   <Switch>
                    <Redirect from='/login/' to="/" />
                   </Switch>
               </Route>
            </>
            
        ):(
            <>
            <h3 style={{color:"#fff"}}>Login Here</h3>
        <label>Username: </label>
        <input type="text" autoFocus className="input-box" value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <p style={{color:"red"}}>{emailerr}</p>
        <label>Password: </label>
        <input type="text" required className="input-box" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <p style={{color:"red"}}>{passworderr}</p>
        <div className="btnContainer">
            {hasaccount ? (
                <>
                <button className="btn-style" type="submit" onClick={handlelogin}>
                    Sign In
                </button>
                <p>Don't have an account &nbsp;
                    <span style={{cursor:"pointer",color:"blue",}} onClick={()=>{sethasaccount(!hasaccount)}}>Sign Up</span></p>
                </>
                ):(
                    <>
                    <button className="btn-style" type="submit"onClick={handlesignup} >
                        Sign Up
                    </button>
                    <p>Have an account!&nbsp;<span style={{cursor:"pointer",color:"blue",}} onClick={()=>{sethasaccount(!hasaccount)}}>Sign In</span></p>
                    </>
                )}
                </div>
            </>
            
        )}
        
        

    </div>

)
}
export default Login;