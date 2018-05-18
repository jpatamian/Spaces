import React from 'react';
import { Link } from 'react-router';


const PlaceTile = props => {
  return(
    <table className = "places-table">
      <tbody>
        <tr>
          <td width="200"> <Link to={`/places/${props.id}`}>
            {props.name}
          </Link> </td>
          <td width="100" > {props.state} </td>
          <td> {props.description} </td>
        </tr>
      </tbody>
    </table>
  )
}



export default PlaceTile;
