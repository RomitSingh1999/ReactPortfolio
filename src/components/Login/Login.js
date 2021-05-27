import React,{useState,useEffect} from 'react'
import fire from './fire'
import "./Login.css"


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



return(

    <div className="login-container">
        {user ? (
            <>
                <h3>
                Welcome 
            </h3>
            <button onClick={handlelogout}>Logout</button>
            </>
            
        ):(
            <>
            <h3>Login Here</h3>
        <label>Username: </label>
        <input type="text" autoFocus className="input-box" value={email} onChange={(e)=>{setemail(e.target.value)}} />
        <p>{emailerr}</p>
        <label>Password: </label>
        <input type="text" required className="input-box" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
        <p>{passworderr}</p>
        <div className="btnContainer">
            {hasaccount ? (
                <>
                <button onClick={handlelogin}>
                    Sign In
                </button>
                <p>Don't have an account<span onClick={()=>{sethasaccount(!hasaccount)}}>Sign Up</span></p>
                </>
                ):(
                    <>
                    <button onClick={handlesignup} >
                        Sign Up
                    </button>
                    <p>have an account! <span onClick={()=>{sethasaccount(!hasaccount)}}>Sign In</span></p>
                    </>
                )}
                </div>
            </>
            
        )}
        
        

    </div>

)
}
export default Login;