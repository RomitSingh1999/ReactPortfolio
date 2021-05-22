import React from 'react'
import './layout.css'
const Layout=(props)=>(
    <>
    <div>
        This will be my layout!!
    </div>
    
    <main className="Content">
        {props.children}
    </main>
    </>
);
export default Layout;