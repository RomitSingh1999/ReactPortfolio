import React,{useState} from 'react'
import './testform.css'


const Testform=(props)=>{
    const[state,setstate]=useState(
        {
            text:""
        }
    )
    const changehandler=(event)=>{
        setstate(
            {
                text:event.target.value
            }
        )
    }
    const submithandler=(event)=>{
        alert(state.text);
        event.preventDefault();
    }

    return (
        <>
        <form onSubmit={submithandler}>
            <p><label>Random text</label></p>
            <p>
                <input  className="textbox" value={state.text} type="text" onChange={changehandler}/>
            </p>
            <p>
            <button className="saveButton" type="submit">Save</button>
            </p>
        </form>
        </>

    )
}
export default Testform;