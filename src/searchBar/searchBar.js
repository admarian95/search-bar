const SearchBar = ({keypressHandler,historyItemPush}) => {

    return (
        <form onSubmit={historyItemPush}>
            <input type='text' onKeyUp={(e)=>keypressHandler(e.target.value)}></input>
        </form>
    )
}

export default SearchBar
