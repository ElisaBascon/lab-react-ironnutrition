// src/App.js
import React from 'react';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';


function App() {

  const [food, setFoods] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);

  const handleDelete = (name) => {
    const filtered = food.filter(elem => elem.name !==name);
    setFoods(filtered);
  }

  const handleNewFood = (food) => {
    const updateFood = [...foods, food];
    setFoods(updateFood);
  }

  const handleSearch = (searchValue) =>{
    let filtered = food.filter((food) => 
    food.name.toLowerCase().includes(Search.toLowerCase())
    );
    setSearchFood(filtered);
  }
  

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