import { useEffect, useState } from "react"

export default function Serch(){
    const [query,setQuery]=useState("Pizza")
    //sytax of use effect hook
    useEffect(()=>{
        function demo(){
            console.log("Demo funtion executed")
        }
        demo()
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