import React from 'react';
import { Link } from 'react-router-dom';

const PlaceInfo = (props) => {
  return(
    <div>
      <div>
        {props.description}
      </div>
      <img src = {props.photo} class = 'place-photo'/>
    </div>
  )
}
export default PlaceInfo
