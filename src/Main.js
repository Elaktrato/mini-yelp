import React, { useState } from 'react';
import Result from "./Result";

function Main(props) {
//   console.log(props);


//   const [loadingMore, setLoadingMore] = useState(false)

//   if(!props.searchResults) {
//     return <div>Loading...</div>
//   }

//   if (props.searchResults.hits.length === 0) {
//   return   <div className="noResultsMessage"><strong>No results found. Please try again.</strong></div>
// }


  return (
    <main>
      <ul className="content">
        {/* {props.searchResults.hits.map((result) => {
          return ( */}
          <Result />
        {/*   result={result} 
           key={result.objectID} 
          query={props.searchResults.query} 
        
          )
         })} */}
      </ul>
    </main>
  );
}

export default Main;
