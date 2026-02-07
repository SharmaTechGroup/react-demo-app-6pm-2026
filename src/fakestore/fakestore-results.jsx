import { useEffect } from "react";
import { useSearchParams } from "react-router-dom"

export function FakestoreResults(){

    let [params] = useSearchParams();

    useEffect(()=>{

         console.log(params.getAll());

     },[])

    return(
        <div>
            <h3>Search Results</h3>
        </div>
    )
}