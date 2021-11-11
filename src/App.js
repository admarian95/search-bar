import SearchBar from './searchBar/searchBar'
import SearchList from './SearchList/SearchList'
import './App.css';

const App = () => {

    const keypressHandler = (val)=>console.log(val)
    return (
        <div>
            <SearchBar keypressHandler={keypressHandler}/>
            <SearchList  searchItems ={['a','b']}/>
        </div>
    )
}

export default App;
