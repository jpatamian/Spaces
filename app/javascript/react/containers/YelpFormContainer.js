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
      data: []
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleTermChange = this.handleTermChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.addSearch = this.addSearch.bind(this)
  }

  handleTermChange(event) {
    this.setState({ term: event.target.value })
  }

  handleLocationChange(event) {
    this.setState({ location: event.target.value })
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
    .catch(error=> console.error('error in fetch ${errorMessage}'))
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
        location: this.state.location

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
    />
    })
  return(
    <div>
      <h1 className = 'add-new' > Find Your Space </h1>
    <div className="row">
      <div className="columns medium-6">
        <form className="callout" onSubmit={this.handleFormSubmit}>
        <TextField
          content={this.state.term}
          label="Category"
          name="category"
          handlerFunction={this.handleTermChange}
        />
        <TextField
          content={this.state.location}
          label="Location"
          name="location"
          handlerFunction={this.handleLocationChange}
        />
        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
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
