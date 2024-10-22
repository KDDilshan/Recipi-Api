import { useState } from 'react'
import Serch from './Components/Serch'
import FoodList from './Components/FoodList'
import Nav from './Components/Nav'
import styles from "./App.css"

function App() {
  const [FoodData,setFoodData]=useState([])
  return (
    <div className='App'>
      <Nav />
      <Serch FoodData={FoodData} setFoodData={setFoodData} />
      <FoodList FoodData={FoodData} />
    </div>
  )
}

export default App
