
import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  return(
    <div>
      <Link to={`/places/${props.id}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default PlaceTile;
