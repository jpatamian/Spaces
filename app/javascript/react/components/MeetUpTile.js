
import React from 'react';
import { Link } from 'react-router';

const MeetupTile = props => {
  debugger
  return(
    <div>
      <div className = 'small-3  columns'>
      <ul>
        {props.event}
        {props.city}
        {props.date}
        {props.description}
      </ul>
    </div>
    </div>
  )
}

export default MeetupTile;
