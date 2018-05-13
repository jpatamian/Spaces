import React, { Component } from 'react'
import PlaceTile from '../components/PlaceTile'
import YelpFormContainer from './YelpFormContainer'

class PlacesIndexContainer extends Component {
  constructor(props) {
      super(props)
      this.state = {
        places: [],
        selectedState: []
      }
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
      .then(body => {
        this.setState( { places: body } )
      })
    .catch(error => console.error(`fetch failed because ${error.message}`))
  }

  render() {
    
    let places = this.state.places.map(place => {

      return(
        <PlaceTile
          key = {place.id}
          id = {place.id}
          name = {place.name}
        />
      )
    })

    return(

      <div>
          <div className = "row">
            <h1 className ='page-header'> Suggestions </h1>
        <div className="columns">
          {places}
        </div>

        </div>
      </div>
    )
  }
}

export default PlacesIndexContainer
