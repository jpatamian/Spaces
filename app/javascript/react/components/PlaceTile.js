
import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  debugger

  return(
    <div className="tile large-3 medium-2 small-1 columns end">
      <Link to={`/places/${props.id}`}>
      <p>{props.name}</p>

      </Link>
    </div>
  )
}

export default PlaceTile;
