import FoodItem from "./FoodItem";

export default function FoodList({FoodData}){
    return(
        <div>
            {FoodData.map((food)=>
                <FoodItem key={food.id} food={food}/>
            )}
        </div>
    )
}