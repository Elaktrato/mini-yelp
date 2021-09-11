import React from 'react';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Result (props) {
        console.log("resultProps")
        console.log(props)
if(props.restaurant){
    return(
        <li className="contentRow" key="restaurant1">
            <div className="restaurantImg">
                <img src="https://ik.imagekit.io/bwcdq46tkc8/mini-yelp/tasteOfTropics-restaurant_x1QbKwyjJN.jfif?updatedAt=1631309125693" />
            </div>
            
            <div className="restaurantInfo">
                <NavLink 
                    className="title"
                    to={`/${props.restaurant.id}`}
                >
                    Taste The Tropics Ice Cream
                </NavLink>
                <p className="cuisine">Cuisine: {props.restaurant.cuisine} </p>
                <p className="cuisine">Phone: 17656972344 </p>
            </div>
        </li>
    )}else {
        return "loading..."
    }
}

export default Result