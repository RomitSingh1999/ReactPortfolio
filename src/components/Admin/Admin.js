import React,{useState,useEffect} from 'react'
import "./Admin.css"
import fire from "../Login/fire"
import { useForm } from "react-hook-form";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
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
              
                  Admin Page
                <div className="form-container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <div className="form-group">
                    <input className="form-control"  type="text-box" {...register("projectName")} placeholder="Project Name" />

                    </div>
                    <div className="form-group">
                    <input className="form-control" {...register("shortDesc")} placeholder="Short Description" />

                    </div>
                    
                    <div className="form-group">
                    <textarea className="form-control" type="text" {...register("fullDesc")} placeholder="Full Description" />                     

                    </div>
                    <button type="submit" class="btn btn-primary"  onClick={clearStuff}>Submit</button>
                </form> 
                </div>
                
            </div>
        
            
            
        </div>
    )
}
