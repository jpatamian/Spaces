
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = "yelp-container">
      <div className = 'grid-item medium-6 columns '>
        <img id="yelp-image" src= {props.image} />
        <h1><a href={props.url}>
          {props.name}
        </a></h1>
          <br/>
          <p>{props.location.address1} {props.location.city}, {props.location.state}</p>
          <ul>{props.categories}</ul>
    </div>
  </div>
  )
}

export default YelpTile;
