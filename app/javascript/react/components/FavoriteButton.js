import React from 'react';

const FavoriteButton = props => {

  return(
  <div className="liked-buttons">
    <button onClick={props.handleSave}><i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  </div>
  )
}

export default FavoriteButton;
