import SearchBar from './searchBar/searchBar'
import SearchHistory from './SearchHistory/SearchHistoryList'
import './App.css';
import axios from 'axios'
import { useState } from 'react';
import SearchDataList from './searchDataList/SearchDataList';

const App = () => {
    const [history,setHistory] = useState([]);
    const [result,setResult] = useState([]);

    const keypressHandler = (val)=>{
        const fetchData = async () =>{
            const result = await axios("https://restcountries.com/v3.1/name/"+val);
            if(result.status===200){
                setResult(result.data.map(item => item.name.common));
            }
        }
        val ? fetchData() : setResult([]); //if empty string is searched set to empty array
    }

    const historyItemPush = (val)=> {
        val.preventDefault();
        let input = val.target.children[0].value;
        let temp = history;
        temp.push({result:input,time: new Date().getFullYear() +"-"+ new Date().getMonth() +"-"+ new Date().getDay()+" "+new Date().getHours() +":"+ new Date().getMinutes() +":"+ new Date().getSeconds()});
        setHistory(temp);
    }

    const historyItemDelete=(val)=>{
        setHistory(history.filter(item => item.time !== val));
    }
    
    return (
        <div className="App">
            <SearchBar keypressHandler={keypressHandler} historyItemPush = {historyItemPush}/>
            <SearchDataList searchItems ={result}/>
            <SearchHistory history={history} setHistory={setHistory} historyItemDelete={historyItemDelete}/>
        </div>
    )
}

export default App;
