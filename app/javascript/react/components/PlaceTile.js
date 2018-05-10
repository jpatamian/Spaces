
import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  return(
    <div className = 'grid-container'>
      <div>
      <Link to={`/places/${props.id}`}>
        {props.name}
      </Link>
    </div>
    </div>
  )
}

export default PlaceTile;
