import { useState } from 'react'
import Serch from './Components/Serch'
import FoodList from './Components/FoodList'
import Nav from './Components/Nav'
import Container from './Components/Container'
import InnerContiner from './Components/InnerContiner'
import FoodDetail from './Components/FoodDetail'

function App() {
  const [FoodData,setFoodData]=useState([])
  const [FoodId,setFoodId]=useState("")
  return (
    <div className='App'>
      <Nav />
      <Serch FoodData={FoodData} setFoodData={setFoodData} />
      <Container>
        <InnerContiner>
           <FoodList setFoodId={setFoodId} FoodData={FoodData} />
        </InnerContiner>
        <InnerContiner>
          <FoodDetail FoodId={FoodId} />
        </InnerContiner>
      </Container>    
    </div>
  )
}

export default App
