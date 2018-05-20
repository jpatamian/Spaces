import React from 'react';
import PlaceTile from '../components/PlaceTile'

class FavoritedContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      likedPlaces: []
    }
}

componentDidMount() {
  fetch('/api/v1/favorites', {
    credentials: 'same-origin'
  })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        likedPlaces: body
      });
    })
    .catch(error => console.error (`Error in fetch: ${error.message}`));
}


render() {
  let favorites = this.state.likedPlaces.map((place) => {

    return(
      <PlaceTile
        key = {place.id}
        id = {place.id}
        name = {place.name}
        state = {place.state}
        description = {place.description}
      />
    )
  })

  return(
    <div>
    <header className = "trip-header"/>
    <div className = "tablecontainer ">
      <h1> Saved </h1>
    <table className = "hover stack">
      <thead>
      <tr>
        <th width="200">Name</th>
        <th width="100" >State</th>
        <th>Description</th>
      </tr>
    </thead>
    </table>
    {favorites}
    </div>
  </div>

    )
  }
}

export default FavoritedContainer;
