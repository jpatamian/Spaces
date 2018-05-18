import React, { Component } from 'react'
import PlaceTile from '../components/PlaceTile'
import YelpFormContainer from './YelpFormContainer'

class PlacesIndexContainer extends Component {
  constructor(props) {
      super(props)
      this.state = {
        allPlaces: {},
        places: [],
        search: '',
        finalResults: []
      }
      this.handleChange = this.handleChange.bind(this)
    }

  componentDidMount() {

    fetch('/api/v1/places')
      .then(response => {
        if (response.ok) {
          return response
        } else {
          let errorMessage = `${response.status} (${response.statusText})`
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState( {
          allPlaces: body,
          places: body
        })
      })

    .catch(error => console.error(`fetch failed  ${error.message}`))
  }

  handleChange(event) {
    let formPayload = {search: event.target.value}
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();

    this.state.allPlaces.forEach((place) => {
      if (place["state"].toLowerCase().includes(search)){
       searchResults.push(place)
     }
      this.setState({
        places: searchResults,
        search: event.target.value })
    })
  }



  render() {

    let finalResults = this.state.finalResults.map(place => {
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

    let places = this.state.places.map(place => {
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
        <div className = "searchbar-container"/>
          <div className = "callout secondary">
           <input
             className="searchbar"
             id="search"
             type='text'
             value={this.state.search}
             onChange={this.handleChange}
             placeholder="Search Cities or States"
           />
       </div>
       <div className = "tablecontainer ">
       <table className = "hover stack">
         <thead>
         <tr>
           <th width="200">Name</th>
           <th width="100" >State</th>
           <th>Description</th>
         </tr>
       </thead>
     </table>
     {places}
     </div>
   </div>

    )
  }
}

export default PlacesIndexContainer
