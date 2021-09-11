import React, {useState} from 'react';
import SearchBar from "./SearchBar";

function Map (props) {
    
    return(
        <div className="mapBackground">
         {/* <MapContainer
            style={{ height: "100vh", width: "100vw" }}
            center={centerLoc}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {cardVisible && (
                <Card locationData={props.locationData} closeCard={handleClick} />
            )}
        </MapContainer> */}
            <SearchBar />
        </div>
    )
}

export default Map