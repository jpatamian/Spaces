
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = "row ">
      <div className = 'column'>
        {props.name}
    </div>
    </div>
  )
}

export default YelpTile;