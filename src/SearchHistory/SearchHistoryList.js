import SearchHistoryItem from "./SearchHistoryItem"

const SearchHistory = ({history,setHistory,historyItemDelete})=>{
    return(
    <>
        
        <ul>
        {history.length ? <button className="clearHistory" onClick={()=>setHistory([])}>Clear History</button> : ""}
            {history.map(item => <SearchHistoryItem historyItem={item} historyItemDelete={historyItemDelete}/>)}
        </ul>
    </>
        
    )
}

export default SearchHistory