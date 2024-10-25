import { useEffect, useState } from "react"

export default function FoodDetail({FoodId}){
    const [food,setFood]=useState({})
    const url=`https://api.spoonacular.com/recipes/${FoodId}/information`
    const API_KEY="afc1e47d49724ea3bf596228619fdc69"

    useEffect(()=>{
        async function FetchFood(){
          const response=await fetch(`${url}?apiKey=${API_KEY}`)
          const data=await response.json()
          setFood(data)
          console.log(data)
        }
        FetchFood()
    },[FoodId])

    return (
        <div>
            Food Details {FoodId}
            {food.title}
            <img src={food.image} alt="" />
        </div> 
    )
}