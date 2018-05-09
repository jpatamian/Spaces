import React, { Component } from 'react';
import { Link } from 'react-router';


const MapFormTile = props => {
  return (
    <div>
    <Link to="Map"</Link>
      <p>{props.location}</p>
    </div>
  )
}

export default MapFormTile;
