import React from 'react'
import './CoffeeItem.css'

const CoffeeItem = ({coffee}) => {
    return(
        <li className="coffee_item">
            <img className="coffee_item__img" src={coffee.image} alt=""/>
            <span className="coffee_item__title">{coffee.title}</span>
        </li>
    )
}

export default CoffeeItem