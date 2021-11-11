
const SearchBar = ({keypressHandler,historyItemPush}) => {
    return (
        <form onSubmit={(e)=>historyItemPush(e)}>
            <input 
                type='text' 
                list="results" 
                placeholder="search a country"
                onKeyUp={(e)=>keypressHandler(e.target.value)}
            />
        </form>
    )
}

export default SearchBar
