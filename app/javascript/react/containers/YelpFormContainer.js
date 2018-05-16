import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'
import YelpTile from '../components/YelpTile'
import PlaceTile from '../components/PlaceTile'

class YelpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      attributes: null,
      isChecked: null,
      data: [],
      search: '',
      finalResults: [],
      places: {}
    }

    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.addSearch = this.addSearch.bind(this)
    this.toggleChange = this.toggleChange.bind(this)
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value })
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value })
  }

  toggleChange () {
    this.setState({
    isChecked: !this.state.isChecked,
    attributes: "gender_neutral_restrooms"})
  }

  addSearch(formPayload) {
    fetch('/api/v1/yelps', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        data: body.data
      })
    })
    .catch(error=> console.error(`error in fetch ${errorMessage}`))
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
    term: '',
    location: '',
    data: [],
    errors: {}})
  }

  handleFormSubmit(event) {

    event.preventDefault();

    if (this.state.term.trim() != '' &&
       this.state.location.trim() != '') {

      let formPayload = {
        term: this.state.term,
        location: this.state.location,
        attributes: this.state.attributes

      }
      this.addSearch(formPayload)
    }else{
      alert("Please Fill Out All Fields")
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
     .then(body =>{
       this.setState( { places: body } )
     })
     .catch(error => console.error(`${error.message}`))
  }


  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      search: this.state.search
    }
    this.filteredPlaces(formPayload)
  }

  handleSearchChange(event) {
    debugger

    this.setState({ search: event.target.value })
  }

  handleSearchSubmit(event) {
    let formPayload = {search: event.target.value}
    let searchResults = []
    let search = formPayload.search.toString().toLowerCase();

    this.state.places.forEach((place) => {
      if (place["state"].toLowerCase().includes(search)){
       searchResults.push(place)
     }
      this.setState({
        finalResults: searchResults,
        search: event.target.value })
    })
  }

  render() {
    <header className = "header-img"/>
    let finalResults = this.state.finalResults.map(place => {
      return(
        <PlaceTile
          key = {place.id}
          id = {place.id}
          name = {place.name}
          state = {place.state}
        />
      )
    })

    let data = this.state.data.map(data => {
      return <YelpTile
        key={data.id}
        name={data.name}
        image={data.image}
        location={data.location}
    />
    })
  return(
    <div>
      <div className = 'header-img'>
        <form className = " yelp-form row" onSubmit={this.handleFormSubmit}>
          <div className="large-6 columns text">
            <TextField
              content={this.state.term}
              label="Accommodation"
              name="accommodation"
              handlerFunction={this.handleTermChange}
            />
          </div>
          <div className="large-6 columns text">

            <TextField
              content={this.state.location}
              label="Location"
              name="location"
              handlerFunction={this.handleLocationChange}
            />
          </div>
            <div className="column">
              <div className = "large 4-columns text">
                <input type="radio" onClick={ this.toggleChange } name="yes" value="yes"/><label>Gender Neutral Restrooms</label>
              </div>
              <button className="small button secondary" onClick={this.handleClearForm}>Clear</button>
              <input className="small button secondary" type="submit" value="Submit" />
            </div>
        </form>

      </div>
      <div className="columns">
        <div className="yelp-feed">
          <ul> {data} </ul>
        </div>
        <ul> {finalResults} </ul>
      </div>
    </div>
  )}
}

export default YelpFormContainer
