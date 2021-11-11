import React from 'react'

const SearchDataList = ({searchItems}) => {
    return (
        <datalist id="results">
            {searchItems.map(item => <option key={item} value={item}/>)}
        </datalist >
    )
}

export default SearchDataList
