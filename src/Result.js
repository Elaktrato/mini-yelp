import React from 'react';
import { Route, NavLink } from "react-router-dom";

function Result ({result, query}) {
    // let title = result.title || result.story_title
    // const toCappitalCase = function(txt) {
    //     return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //   }

    // if (title && query) {
    //     title = title.replaceAll(query.toLowerCase(), "<mark>"+query.toLowerCase()+"</mark>")
    //     title = title.replaceAll(query.toUpperCase(), "<mark>"+query.toUpperCase()+"</mark>")
    //     title = title.replaceAll(toCappitalCase(query), "<mark>"+toCappitalCase(query)+"</mark>")
    // }
    
    // const modifiedTitle = {
    //     __html:title
    // }
        
    return(
        <li className="contentRow">
            <div className="restaurantImg">
                <img />
            </div>
            
            <div className="restaurantInfo">
                <NavLink 
                    className="title"
                    to="/example"
                >
                    example
                </NavLink>
                <p className="cuisine"> Italian </p>
            </div>
        </li>
    )
}

export default Result