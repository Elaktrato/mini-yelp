import React, {useState} from 'react';
import SearchBar from "./SearchBar";
import {useParams} from "react-router-dom";
import { useEffect } from 'react/cjs/react.development';

function Restaurant (props) {

    let {id} = useParams()

    const getRestaurant = async () => {
        let jsonResponse = []
        try {
          let response = await fetch(`https://mini-yelp-backend1.herokuapp.com/restaurants/${id}`, { cache: 'no-cache' })
          console.log(response)
          if (response) {
            console.log("ARgh")
            console.log(jsonResponse)
            jsonResponse = await response.json()
          }
        } catch (error) {
          console.log(error);
          jsonResponse.error = error.message
        }
        return jsonResponse
      };


      const restaurantData = () => {
        getRestaurant()
    }


      useEffect(() => {
        async function renderRestaurant() {
          await restaurantData();
          }
          renderRestaurant()
      }, []

    )


    return(
        <div className="restaurantBody">
            <div>
                
            </div>
           {id} Do something
        </div>
    )
}

export default Restaurant