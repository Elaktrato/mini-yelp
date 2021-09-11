import React, {useState} from 'react';

function SearchBar (props) {
    console.log("searchprops")
    console.log(props)
    return(
        <header className="App-header">
            <div>
            <h1 className="headTitle">Mini-Yelp</h1>
            </div>
            <div className="searchfilters">
                <div className="filterSelect">
                    <label>City</label>
                    <select name="cities" id="citiesSelect" className="inputField">
                        <option>Anywhere</option>
                        {props.cities.map((city) => {
                        return (<option>{city.name}</option>)
                        })}
                    </select>
                </div>

                
                <div className="filterSelect">
                    <label>Cuisine</label>
                    <select name="cities" id="cuisineSelect" className="inputField">
                        <option>All</option>
                        {props.cuisine.map((cuisine) => {
                            return (<option>{cuisine.name}</option>)
                        })}
                    </select>
                </div>

            <button 
                // onClick={() => props.getData()}
            >
                Search
            </button>
            </div>
        </header>
    )
}

export default SearchBar