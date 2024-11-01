import { useEffect, useState } from "react"
import styles from "./FoodDeatils.module.css"
import ItemList from "./ItemList"

export default function FoodDetail({FoodId}){
    const [food,setFood]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const url=`https://api.spoonacular.com/recipes/${FoodId}/information`
    const API_KEY="afc1e47d49724ea3bf596228619fdc69"

    useEffect(()=>{
        async function FetchFood(){
          const response=await fetch(`${url}?apiKey=${API_KEY}`)
          const data=await response.json()
          setFood(data)
          console.log(data)
          setIsLoading(false)
        }
        FetchFood()
    },[FoodId])

    return (
        <div>
            <div className={styles.recipeCard}>
                <h1 className={styles.recipeName}>{food.title}</h1>
                <img className={styles.recipeImage} src={food.image} alt="" />
                <div className={styles.recipeDeatils}>
                    <span>
                        <strong>⏰{food.readyInMinutes} Minutes</strong>
                    </span>
                    <span>
                        <strong>Serves 😉{food.servings}</strong>
                    </span>
                    <span>
                        <strong>{food.vegetarian ? "🥕Vegetarian":"🥩Non-Vegetarian"}</strong>
                    </span>
                    <span>
                        <strong>{food.vegan ? "Vegan":""}</strong>
                    </span>
                </div>
                <div>
                   $ <span> <strong>{food.pricePerServing/100} Per Serving</strong></span>
                </div>

                    <h2>Ingredients</h2>
                    <ItemList food={food} isLoading={isLoading}/>
                <div className={styles.recipeInstructions}>
                    <ol>
                    <h2>Instructions</h2>
                    {isLoading ? (<p>Loading ...</p>):(food.analyzedInstructions[0].steps.map((step)=>(<li>{step.step}</li>)))}
                    </ol>
                </div>
            </div>
        </div> 
    )
}