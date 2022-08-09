// src/App.js
import React from 'react';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';


function App() {

  const [food, setFoods] = useState(foods)

  const handleDelete = (name) => {
    const filtered = food.filter(elem => elem.name !==name);
    setFoods(filtered);
  }

  const handleNewFood = (food) => {
    food.name = food.length +1;
    const updateFood = [...foods];
    updateFood.push(food);
    setFoods(updateFood);
  }

  const handleSearch = (searchValue) =>{
    if (searchValue === '') {
      setFoods(foods)
    } else {
      const filtered = food.filter(elem => elem.name.toLowerCase().includes(searchValue));
      setFoods(filtered)
    } }
  

  return (
  <div className="App">

    <h1>Food List</h1>

    <Search onSearch={handleSearch} />

    {food.map((elem) => {
      return(
        <FoodBox key={elem.name} food={elem} onDelete={handleDelete} />
      )
    })}

  </div>
)}
export default App;