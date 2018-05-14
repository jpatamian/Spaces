import React from 'react';
import { Link } from 'react-router';

const PlaceTile = props => {
  debugger 
  return(
    <div className = 'grid-container'>
      <div>
        <Link to={`/places/${props.id}`}>
          {props.name}
        </Link><br/>
        {props.state}
      </div>
    </div>
  )
}

export default PlaceTile;
