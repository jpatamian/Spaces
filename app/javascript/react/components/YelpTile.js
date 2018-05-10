
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div>
      <div className = 'small-3  columns'>
          {props.name}
    </div>
    </div>
  )
}

export default YelpTile;
