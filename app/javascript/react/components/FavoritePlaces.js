import React from 'react';

const LikedRecipe = props => {
  return (

  <div className="liked-tile">
    <h1><Link to={`/places/${props.id}`}>
      {props.name}
    </Link></h1>
  </div>

  )
}

export default LikedRecipe;
