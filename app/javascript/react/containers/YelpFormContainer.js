import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'
import YelpTile from '../components/YelpTile'

class YelpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      term: '',
      location: '',
      attributes: null,
      isChecked: null,
      data: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
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
    fetch('http://localhost:3000/api/v1/yelps', {
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

  render() {

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
      <p className = 'find'> Find Your Space </p>
    <div className="row">
      <div className="columns medium-6">
        <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.term}
          label="Accommodation"
          name="accommodation"
          handlerFunction={this.handleTermChange}
        />
        <TextField
          content={this.state.location}
          label="Location"
          name="location"
          handlerFunction={this.handleLocationChange}
        />
        <div className="switch-container">
            <label>
                <input ref="switch" checked={ this.state.isChecked } onClick={ this.toggleChange } className="switch" type="checkbox" />
                <div>
                    <span><g className="icon icon-toolbar grid-view"></g></span>
                    <span><g className="icon icon-toolbar ticket-view"></g></span>
                    <div></div>
                </div>
            </label>
          </div>
        <div className="yelp-button">
          <p id='clickgn'> Gender Neutral Restrooms </p>
          <button className="button small" onClick={this.handleClearForm}>Clear</button>
          <input className="button small" type="submit" value="Submit" />
        </div>
        </form>
      </div>
    </div>
      <div className="columns">
        <div className="yelp-feed">
          <ul> {data} </ul>
        </div>
      </div>
  </div>
  )}
}

export default YelpFormContainer
