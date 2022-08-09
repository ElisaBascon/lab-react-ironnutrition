import React, { useSate } from "react";

export default function AddFoodForm (props) {
    const { newFood } = props;

    const [food, setFood] = useSate({
        name: '',
        image: '',
        calories: '',
        servings: ''
    })

    const handleForm = (elem) => {
        elem.preventDefault();
        newFood(food);
        setFood({
            name: '',
            image: '',
            calories: '',
            servings: ''
        })
    }

    const handleChange = (elem) => {
        const conditionalValue = elem.target.name === 'name' ? parseInt(elem.target.value) : elem.target.value;
        setFood(prev => {
            return {
                ...prev,
                [elem.target.name]: conditionalValue
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input type="text" placeholder="Name" name="name" value={food.name} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Image Url" name="image" value={food.image} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Calories" name="calories" value={food.calories} onChange={(elem) => handleChange(elem)}/>
                <input type="text" placeholder="Servings" name="servings" value={food.servings} onChange={(elem) => handleChange(elem)}/>
                <button type="submit">Save new task</button>
            </form>
        </div>
    )
} 