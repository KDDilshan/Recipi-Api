import { useEffect, useState } from "react"

const url="https://api.spoonacular.com/recipes/complexSearch"
const API_KEY="afc1e47d49724ea3bf596228619fdc69"


export default function Serch(){
    const [query,setQuery]=useState("Pizza")
    //sytax of use effect hook
    useEffect(()=>{
        async function FetchFood(){
          const res=await fetch(`${url}?query=${query}&apiKey=${API_KEY}`)
          const data=await res.json()
          console.log(data.results)
        }
        FetchFood()
    },[query])
    return (
        <div>
            <input
             value={query}
             onChange={((e)=>setQuery(e.target.value))} 
             type="text" />
        </div>
    )
}