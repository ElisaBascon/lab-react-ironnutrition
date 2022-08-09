
import React from "react";


export default function FoodBox(props) {
    const {food: {name, image, calories, servings}, onDelete } = props;

    return(
    <div>
        <p>{name}</p>
        <img src={image} alt="food" width="150px"></img>
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p><b>Total Calories: {calories}</b> kcal</p>
        <button onClick={() => onDelete(name)} >delete</button>
    </div>
    )
}