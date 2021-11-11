import React from 'react'

const SearchHistoryItem = ({historyItem,historyItemDelete}) => {
    return (
        <li key={historyItem.time} className="historyListItem">
            <div className="historyName"> {historyItem.result} </div>
            <div className="historyTime"> <small>({historyItem.time})</small> </div>
            <div className="deleteHistoryItem" onClick={()=>historyItemDelete(historyItem.time)}> X </div>
        </li>
    )
}

export default SearchHistoryItem
