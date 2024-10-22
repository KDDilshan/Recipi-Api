import { useState } from 'react'
import Serch from './Components/Serch'

function App() {
  const [FoodData,setFoodData]=useState([])
  return (
    <div className='App'>
      <Serch FoodData={FoodData} setFoodData={setFoodData} />
      {FoodData.map((food)=>
      <h1>{food.title}</h1>
      )}
    </div>
  )
}

export default App
