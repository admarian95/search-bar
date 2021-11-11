const SearchBar = ({keypressHandler}) => {

    return (
        <form>
            <input type='text' onKeyUp={(e)=>keypressHandler(e.target.value)}></input>
        </form>
    )
}

export default SearchBar
