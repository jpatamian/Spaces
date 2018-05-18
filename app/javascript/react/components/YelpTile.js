
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = "yelp-container">
      <div className = 'grid-item medium-6 columns '>
        <img id="yelp-image" src= {props.image} />
        <h1><a href={props.url}>
          {props.name}
        </a></h1>
          <br/>
          <p>{props.location.address1} {props.location.city}, {props.location.state}</p>
          <ul>{props.categories}</ul>
    </div>
  </div>
  )
}

export default YelpTile;

{/* <div class="card">
  <img src="assets/img/generic/rectangle-1.jpg">
  <div class="card-section">
    <p>This is a simple card with an image.</p>
  </div>
</div>

<!-- image has padding -->
<div class="card">
  <div class="card-section">
    <img src="assets/img/generic/rectangle-1.jpg">
  </div>
  <div class="card-section">
    <p>This is a simple card with an image inside a `.card-section`.</p>
  </div>
</div> */}
