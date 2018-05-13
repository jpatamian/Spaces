
import React from 'react';
import { Link } from 'react-router';

const MeetupTile = props => {
  
  return(
    <div className = 'grid-container'>
      <div className = 'row'>
        {props.name}<br/>
        {props.city}<br/>
        {props.date}<br/>
        {props.description}<br/>
    </div>
    </div>
  )
}

export default MeetupTile;
