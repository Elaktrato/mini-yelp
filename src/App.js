import './App.css';
import React, {useState, useEffect} from "react";
import Main from "./Main";
import Map from "./Map";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Restaurant from "./Restaurant"

function App() {

  const [searchResults, setSearchResults] = useState(
    ""
  );

  const [cuisine, setCuisine] = useState("");
  const [city, setCity] = useState("");

  useEffect(
    () => initialSearch(searchResults.query || ''), []
  )

  const getData = async (searchQuery) => {
    let jsonResponse = {error: "unknown"}
    try {
      let response = await fetch(`https://mini-yelp-backend1.herokuapp.com/restaurants${cuisine}${city}`, { cache: 'no-cache' })
      response = await response.json()
      console.log(response)
      if (response.ok) {
        jsonResponse = await response.json()
      }
    } catch (error) {
      console.log(error);
      jsonResponse.error = error.message
    }
    return jsonResponse
  }

  

  const initialSearch = async (searchQuery) => {
    const currentSearch = await getData(searchQuery);
    setSearchResults(currentSearch)
  }

  return (
    <div className="App">
      <Map 
      // query={restaurants} 
      />
      
  <BrowserRouter>
    <Switch>
      <Route exact path="/" >
        <Main />
      </Route>
      
      <Route path="/:id" >
        <Restaurant />
      </Route>
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
