import React,{useState,useEffect} from 'react'
import "./Admin.css"
import fire from "../Login/fire"
import { useForm } from "react-hook-form";
import { FormText } from 'react-bootstrap';

export default function Admin() {
const database=fire.database()
const { register, handleSubmit } = useForm();
const adminDataJson= database.ref('admin/projects');
const onSubmit = (data) => {
    adminDataJson.push(data)

};
const clearStuff=()=>{
    alert("Form Submmited")
    allitems()
}
const allitems=()=>{
    adminDataJson.on('value',(getitems)=>{
        const items=getitems.val();
         const itemlist=[]
        for (let id in items)
        {
            itemlist.push(items[id])
        }
        console.log(itemlist)
    })
}


    return (
        <div className="admin-bg">

            <div className="Admin-Container">
              <h2>
                  Admin Page
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p>
                    
                    
                    <input className="input-field" type="text-box" {...register("projectName")} placeholder="Project Name" />
                    
                    </p>
                    <p>
                    <input id="input-field-short" {...register("shortDesc")} placeholder="Short Description" />
                 
                    </p>
                    <p>
                    <textarea id="input-field-full" type="text" {...register("fullDesc")} placeholder="Full Description" />                     
                    </p>
                    <input className="btn" onClick={clearStuff} type="submit" />
                </form>
                </h2>  
            </div>
            <div>
            
            </div>
        </div>
    )
}
