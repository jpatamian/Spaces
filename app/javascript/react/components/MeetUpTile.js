
import React from 'react';
import { Link } from 'react-router';

const MeetupTile = props => {
  return(
    <div className = 'yelp-container'>
      <div className = 'grid-item medium-6 columns'>
        <h1><a href={props.link}>
          {props.event}
        </a></h1><br/>
        <p>{props.city}<br/>
        {props.date}<br/>
        {props.description}<br/>
      </p>
    </div>
    </div>
  )
}

export default MeetupTile;
