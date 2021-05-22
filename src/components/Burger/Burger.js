import React,{useState} from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger=(props)=>{
    const [state]=useState(
        {
            ingredient:{
                salad:2,
                bacon:1,
                cheese:3,
                meat:1
            }
        }
    )
    var sum=0;
    const newarr=Object.keys(state.ingredient)
    .map(eachkey=>{
        return [...Array(state.ingredient[eachkey])].map((_,i)=>{
            sum+=1;
            return <BurgerIngredient key={eachkey+i} type={eachkey}/>;
        });
    });
    console.log(sum)

    const addelement=(val)=>
    {
        if(val===0)
        return <div>Add Some Elements</div>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {addelement(sum)}
            {newarr}
            
            <BurgerIngredient type="bread-bottom"/>

        </div>
    );
}

export default Burger;