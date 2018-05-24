
import React from 'react';
import { Link } from 'react-router';

const YelpTile = props => {
  return(
    <div className = "yelp-container">
      <table className = 'yelp-table'>
        <tbody>
        <tr>
          <td width = "400">
          <img id="yelp-image" src= {props.image} />
          <br/>
        <a href={props.url}> {props.name}</a>
        </td>
          <td width = "400">{props.location.address1} {props.location.city}, {props.location.state}</td>
          <td width = "400" >{props.categories}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default YelpTile;
