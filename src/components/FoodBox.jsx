import React from "react";
import {Card, Col, Button} from 'antd';


export default function FoodBox(props) {
    const {name, image, calories, servings } = props.food;
    return(
        <Col>
            <Card title={name} >
                <img src={image} alt="food"></img>
                <p>Calories: {calories}</p>
                <p>Servings: {servings}</p>
                <p>Total Calories: {calories} * {servings} kcal</p>
                <Button>Delete</Button>
            </Card>
         </Col>

    )
}