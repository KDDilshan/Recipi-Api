import { useState } from 'react'
import Serch from './Components/Serch'
import FoodList from './Components/FoodList'
import Nav from './Components/Nav'
import styles from "./App.css"
import Container from './Components/Container'
import InnerContiner from './Components/InnerContiner'

function App() {
  const [FoodData,setFoodData]=useState([])
  return (
    <div className='App'>
      <Nav />
      <Serch FoodData={FoodData} setFoodData={setFoodData} />
      <Container>
        <InnerContiner>
           <FoodList FoodData={FoodData} />
        </InnerContiner>
        
      </Container>    
    </div>
  )
}

export default App
