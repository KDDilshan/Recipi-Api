import { useState } from 'react'
import Serch from './Components/Serch'
import FoodList from './Components/FoodList'

function App() {
  const [FoodData,setFoodData]=useState([])
  return (
    <div className='App'>
      <Serch FoodData={FoodData} setFoodData={setFoodData} />
      <FoodList FoodData={FoodData} />
    </div>
  )
}

export default App
