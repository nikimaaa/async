import React from 'react'
import './CoffeeList.css'
import CoffeeItem from "../CoffeeItem";

const CoffeeList = ({data}) => {
    return(
        <ul className="coffee_list">
            {
                data.map((coffee, index) => {
                    return <CoffeeItem key={index} coffee={coffee}/>
                })
            }
        </ul>
    )
}

export default CoffeeList