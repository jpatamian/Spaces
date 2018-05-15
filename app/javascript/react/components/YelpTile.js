
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = 'grid-container'>
      <div className = 'row yelp-data'>
        <h1><a href={props.url}>
          {props.name}
        </a></h1>
        <br/>
          <p>{props.location.display_address}</p>
          <img id="yelp-image" src= {props.image} />
    </div>
    </div>
  )
}

export default YelpTile;
