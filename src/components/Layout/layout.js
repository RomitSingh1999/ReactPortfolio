import React from 'react'
import './layout.css'
import Testform from '../Forms/testform'
const Layout=(props)=>(
    <div className="layout">
        <div>
            This will be my layout!!
        </div>
        
        <main className="Content">
            {props.children}
        </main>
        <Testform/>
    </div>

        
    
    
);
export default Layout;