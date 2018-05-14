import React, {Component} from 'react'
import PlaceTile from "./PlaceTile"

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      places: [],
      search: '',
      finalResults: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.filteredPlaces = this.filteredPlaces.bind(this)
  }

  componentDidMount() {
   fetch('api/v1/places')
     .then(response => {
       if (response.ok) {
         return response
       } else {
         let errorMessage = `${response.status} (${response.statusText})`
       }
     })
     .then(response => response.json())
     .then(body =>{
       this.setState( { places: body } )
     })
     .catch(error => console.error(`${error.message}`))
  }

  filteredPlaces(formPayload) {
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();
    this.state.places.forEach((place) => {
      if (place["state"].toLowerCase().includes(search)) {
       searchResults.push(place)
     }
      this.setState({ finalResults: searchResults })
    })
  }

  render() {
    let finalResults = this.state.finalResults.map(palette => {
      return(
        <PlaceTile
          key = {place.id}
          id = {place.id}
          name = {place.name}
          state = {place.state}
        />
      )
    })

    return(
     <div id="index-container">
       <div id="searchbar">
         <input
           id="search"
           type='text'
           value={this.state.search}
           onChange={this.handleChange}
           placeholder="Search City or State"
         />
       </div>
       <div className="row">
         {finalResults}
       </div>
     </div>
   )
  }
}

export default SearchBar
