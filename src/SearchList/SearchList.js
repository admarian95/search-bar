// import {useEffect} from "react"
import SearchItem from "./SearchItem"

const SearchList = ({searchItems}) => {
    
    return (
    
    <ul> 
        {searchItems.map((el) => < SearchItem searchItem = {el} key={el}/>)}
    </ul>     
    )}
    

export default SearchList
