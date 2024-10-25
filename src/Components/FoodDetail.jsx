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
            <div>
                <h1>{food.title}</h1>
                <img src={food.image} alt="" />
                <div>
                    <span>
                        <strong>⏰{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>Serves 😉{food.servings}</strong>
                    </span>
                    <span>
                        {food.vegetarian ? "🥕Vegetarian":"🥩Non-Vegetarian"}
                    </span>
                    <span>
                        {food.vegan ? "Vegan":""}
                    </span>
                </div>
                <div>
                   $ <span>{food.pricePerServing/100} Per Serving</span>
                </div>
            </div>
        </div> 
    )
}