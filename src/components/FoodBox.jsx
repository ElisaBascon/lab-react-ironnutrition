
import React from "react";
import { Card, Col, Button } from 'antd';


export default function FoodBox(props) {
    const {food: {name, image, calories, servings}, onDelete } = props;

    return(

    <Col>
        <Card title={name} style={{width: 230, height: 300, margin: 10}}>
            <img src={image} alt="food" height={60} />
            <p>Calories: {calories}</p>
            <p>Servings: {servings}</p>
            <p><b>Total Calories: {calories}</b> kcal</p>
            <Button onClick={() => onDelete(name)} >delete</Button>
        </Card>
    </Col>
    )
}