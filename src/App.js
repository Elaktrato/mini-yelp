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

  const [locationData, setLocationData] = useState("")
  const [cuisine, setCuisine] = useState("");
  const [city, setCity] = useState("");
  const [loadingIp, setLoadingIp] = useState(true)

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

  const getIp = async () => {
    let ipUrl = "https://geo.ipify.org/api/v1?apiKey=";
    let ipApiKey = "at_VF7kJXfX3dBVqla8cpVBLGmfQO3cg";
    let currentIpInfo = {error: "unknown"};
    try {
      const response = await fetch(ipUrl + ipApiKey)
      if(response.ok) {
        currentIpInfo = await response.json()
      }else{
        return currentIpInfo
      }
    } catch(error) {
      currentIpInfo.error = error.message
    }
    return currentIpInfo
  }


  useEffect(() => {

    async function getLoc() {
      setLocationData(await getIp());
      console.log(locationData);
      setLoadingIp(false);
      }
    
      getLoc()

    initialSearch();
    getCities();
    getCuisines();
  }, []
  )

  let mapcomponent;
  if(loadingIp){
    return ""
  }else if(!loadingIp){
    return (
      <Map 
      getData={getData()}
      query={restaurants} 
      cities={city}
      cuisine={cuisine}
      locationData={locationData}
      />)
  }

  return (
    <div className="App">
      {mapcomponent}
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
