
import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  return(
    <div className = "columns small-12 medium-6 large-4 end">
      <Link to={`/places/${props.id}`}>
        {props.name}
      </Link>
    </div>
  )
}

export default PlaceTile;
