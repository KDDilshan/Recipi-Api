import FoodItem from "./FoodItem";

export default function FoodList({FoodData,setFoodId}){
    return(
        <div>
            {FoodData.map((food)=>
                <FoodItem setFoodId={setFoodId} key={food.id} food={food}/>
            )}
        </div>
    )
}