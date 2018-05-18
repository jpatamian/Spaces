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
    attributes: null,
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


  handleSubmit(event) {
    event.preventDefault()
    let formPayload = {
      search: this.state.search
    }
    this.filteredPlaces(formPayload)
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
        url={data.url}
        categories={data.categories}
    />
    })
  return(
    <div>
      <div className = 'header-img'/>

      <div className = "img-row">
        <div className = "img-column">
          <div className = "plan"/>
            <div className = "plan2"/>
        </div>
      </div>
        <form className = "yelp-form" onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.state.term}
            label="Accommodation"
            name="Accommodation"
            placeholder="Accommodation"
            handlerFunction={this.handleTermChange}
          />
          <TextField
            content={this.state.location}
            label="Location"
            name="Location"
            placeholder = "Location"
            handlerFunction={this.handleLocationChange}
          />

          <input type="checkbox" onClick={ this.toggleChange } value="yes"/>
          <label>Gender Neutral Restrooms</label>
        <br/>
            <button className="small button secondary" onClick={this.handleClearForm}>Clear</button>
            <input className="small button secondary" type="submit" value="Submit" />
          </form>

              <div className= "yelp-container row">{data}</div>
  </div>
  )}
}

export default YelpFormContainer
