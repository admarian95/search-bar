import SearchBar from './searchBar/searchBar'
import SearchList from './SearchList/SearchList'
import './App.css';
import { useState } from 'react';

const App = () => {
const [history,setHistory] = useState([])
    const keypressHandler = (val)=>console.log(val)
    const historyItemPush = (val)=> setHistory(val)
    return (
        <div>
            <SearchBar keypressHandler={keypressHandler} historyItemPush = {historyItemPush}/>
            <SearchList  searchItems ={['a','b']}/>
            <SearchHistory history={history} />
        </div>
    )
}

export default App;
