
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  debugger
  return(
    <div className = 'grid-container'>
      <div className = 'yelp-data'>
        <h1><a href={props.url}>
          {props.name}
        </a></h1>
          <br/>
          <p>{props.location.address1} {props.location.city}, {props.location.state}</p>
          <img id="yelp-image" src= {props.image} />
    </div>
    </div>
  )
}

export default YelpTile;
