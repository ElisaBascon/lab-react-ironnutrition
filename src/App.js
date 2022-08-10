/* ESTE ES EL CODDIGO DE FORM QUE PETA 
  {showFood && <AddFoodForm newFood={handleNewFood} />}
  <button onClick={() => setShowFood(prev => !prev)}>{!showFood ? "Add new food" : "Hide form" }</button> */


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
  const [showFood, setShowFood] = useState(foods);

  const handleDelete = (name) => {
    const filtered = food.filter(elem => elem.name !==name);
    setFoods(filtered);
  }

  const handleNewFood = (food) => {
    const updateFood = [...foods];
    updateFood.push(food);
    setFoods(updateFood);
  }

  const handleSearch = (food) =>{
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