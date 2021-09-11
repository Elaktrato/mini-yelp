import React, {useState} from 'react';

function SearchBar (props) {
    // const [searchTerm, setSearchTerm] = useState('')

    // const handleChange = (event) => {
    //     setSearchTerm(event.target.value)
    // }

    // const handleEnterSubmit = (event) => {
    //     if(event.key === "Enter"){
    //         props.getData(searchTerm)
    //     }

    // }
    return(
        <header className="App-header">
            <div>
            <p className="headTitle">Mini-Yelp</p>
            </div>
            <div className="searchbar">
            <input className="inputField" 
                // onChange={handleChange} 
                // onKeyPress={handleEnterSubmit} 
                id="searchField" 
                type="search"
                // value={searchTerm}
            />
            <button 
            //  onClick={() => props.getData(searchTerm)}
            >
                Search
            </button>
            </div>
        </header>
    )
}

export default SearchBar