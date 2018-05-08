import React from 'react';
import { Link } from 'react-router-dom';

const PlaceInfo = (props) => {

  return(
    <div className="row collapse">
      <div className="columns small-12">
          <h2 className="page-header text-center">
            {props.name}
          </h2>
          <img src = {props.place_photo.url} className = 'photos'/>
      </div>
      <div>
        {props.description}
      </div>
    </div>
  )
}
export default PlaceInfo
