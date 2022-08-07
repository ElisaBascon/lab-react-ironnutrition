// src/App.js
import React from 'react';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';


function App() {

  const [food, setFoods] = useState(foods)

  return <div className="App">
  <h1>Food List</h1>
    <div>
    {food.map(elem => {
      return <FoodBox key={elem} />
    })}
    </div>
</div>;
}
export default App;