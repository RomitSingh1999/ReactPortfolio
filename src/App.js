import './App.css';
import React from 'react';
import Layout from './components/Layout/layout';
import Burger from './components/Burger/Burger'
const App=(props)=>{
    
        return (
            
            <div className = "App" >
                <Layout>
                    <Burger/>                    
                </Layout>
            </div>
        );
    }
         

export default App;