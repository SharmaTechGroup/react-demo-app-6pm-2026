import { useEffect } from "react";

export function useSearchProducts(data, searchString){
    let searchResults = [];
    useEffect(()=>{
      searchResults = data.filter(item=>
        item.title.toLowerCase().includes(searchString.toLowerCase())
      );
    },[searchString])

    return searchResults;
}