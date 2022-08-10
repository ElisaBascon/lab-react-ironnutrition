import React, { useSate } from "react";

export default function AddFoodForm (props) {
    const { newFood } = props;

    const [food, setFood] = useSate({
        name: '',
        image: '',
        calories: '',
        servings: ''
    })


    const handleChange = (e) => {
        const conditionalValue = e.target.name === 'calories' ? parseInt(e.target.value) : e.target.value;
        setFood(prev => {
            return {
                ...prev,
                [e.target.name]: conditionalValue
            }
        })
    }

    const handleForm = (e) => {
        e.preventDefault();
        newFood(food);
        setFood({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })
    }

    return (
        <div>
            <h3>Add new Food</h3>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" name="name" value={food.name} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Image Url" name="image" value={food.image} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Calories" name="calories" value={food.calories} onChange={(e) => handleChange(e)}/>
                <input type="text" placeholder="Servings" name="servings" value={food.servings} onChange={(e) => handleChange(e)}/>
                <button type="submit">Save new task</button>
            </form>
        </div>
    )
} 