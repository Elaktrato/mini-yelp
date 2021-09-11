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
            <select className="inputField">
                {props.cities.map((city) => {
                    return <option>{props.cities.name}</option>
                })

                }
            </select>
            <button 
                onClick={() => props.getData()}
            >
                Search
            </button>
        </header>
    )
}

export default SearchBar