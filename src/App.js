import './App.css';
import React, {useState, useEffect} from "react";
import Main from "./Main";
import Map from "./Map";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Restaurant from "./Restaurant"

function App() {

  const [restaurants, setRestaurants] = useState(
    ""
  );

  const [cuisine, setCuisine] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    initialSearch();
    getCities();
    getCuisines();
  }, []
  )

  const getData = async () => {
    let jsonResponse = {error: "unknown"}
    try {
      let response = await fetch(`https://mini-yelp-backend1.herokuapp.com/restaurants`, { cache: 'no-cache' })
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

  const getCities = async () => {
    let jsonResponse = {error: "unknown"}
    try {
      let response = await fetch(`https://mini-yelp-backend1.herokuapp.com/cities/`, { cache: 'no-cache' })
      response = await response.json()
      console.log(response)
      if (response.ok) {
        jsonResponse = await response.json()
      }
    } catch (error) {
      console.log(error);
      jsonResponse.error = error.message
    }
    setCity(jsonResponse)
  }

  const getCuisines = async () => {
    let jsonResponse = {error: "unknown"}
    try {
      let response = await fetch(`https://mini-yelp-backend1.herokuapp.com/cuisine/`, { cache: 'no-cache' })
      response = await response.json()
      console.log(response)
      if (response.ok) {
        jsonResponse = await response.json()
      }
    } catch (error) {
      console.log(error);
      jsonResponse.error = error.message
    }
    setCuisine(jsonResponse)
  }

  const initialSearch = async (searchQuery) => {
    const currentSearch = await getData(searchQuery);
    setRestaurants(currentSearch)
  }

  return (
    <div className="App">
      <Map 
      getData={getData()}
      query={restaurants} 
      cities={city}
      cuisine={cuisine}
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
