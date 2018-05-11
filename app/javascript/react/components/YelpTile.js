
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = 'grid-container'>
      <div className = 'row'>
          {props.name}
          <img src= {props.image} />
    </div>
    </div>
  )
}

export default YelpTile;
