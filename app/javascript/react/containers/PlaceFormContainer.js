import React, { Component } from 'react'
import { browserHistory, withRouter } from 'react-router'
import TextField from '../components/TextField'

class PlaceFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      description: '',
      reviews: ''
    }

    this.handleReviewChange = this.handleReviewChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleZipcodeChange = this.handleZipcodeChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.addPlace = this.addPlace.bind(this)
  }

  handleReviewChange(event) {
    this.setState({ reviews: event.target.value })
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({
    name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    description: '',
    reviews: '',
    errors: {}})
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }
  handleZipcodeChange(event) {
    this.setState({ zipcode: event.target.value })
  }

  handleAddressChange(event) {
    this.setState({ address: event.target.value })
  }

  handleCityChange(event) {
    this.setState({ city: event.target.value })
  }

  handleStateChange(event) {
    this.setState({ state: event.target.value })
  }

  handleCountryChange(event) {
    this.setState({ country: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  addPlace(submission) {

    fetch(`/api/v1/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify(submission)
    }).then( () => {
      browserHistory.push('/places')
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if (this.state.name.trim() != '' &&
       this.state.state.trim() != '' &&
        this.state.description.trim() != '') {

      let formPayload = {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          zipcode: this.state.zipcode,
          description: this.state.description,
          reviews: this.state.reviews
      }
      this.addPlace(formPayload)
    }else{
      alert("Please Fill Out All Fields")
    }
  }

  render() {
    return(
      <div>
        <div className = 'form-header' />
        <form className="new-form" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="columns medium-6 ">
            <TextField
              content={this.state.name}
              label="Name"
              name="Name"
              handlerFunction={this.handleNameChange}
            />
          </div>
          <div className="columns medium-6 ">
            <TextField
              content={this.state.address}
              label="Street Name"
              name="Street Name (leave blank if n/a)"
              handlerFunction={this.handleAddressChange}
            />
          </div>
          <div className="columns medium-6 ">

            <TextField
              content={this.state.city}
              label="City"
              name="City"
              handlerFunction={this.handleCityChange}
            />
          </div>
          <div className="columns medium-6 ">

            <TextField
              content={this.state.state}
              label="State"
              name="State"
              handlerFunction={this.handleStateChange}
            />
          </div>
          <div className="columns medium-6 ">

            <TextField
              content={this.state.country}
              label="Country"
              name="Country"
              handlerFunction={this.handleCountryChange}
            />
          </div>
          <div className="columns medium-6 ">

            <TextField
              content={this.state.zipcode}
              label="Zipcode"
              name="Zipcode (leave blank if n/a)"
              handlerFunction={this.handleZipcodeChange}
            />
          </div>
          <div className="columns medium-6 ">
            <label>
              <textarea
                type="text"
                content={this.state.description}
                placeholder= "Description"
                name="description"
                onChange={this.handleDescriptionChange}
              />
            </label>
          </div>
          <div className="columns medium-6 ">

            <label>
              <textarea
                type="text"
                content={this.state.reviews}
                placeholder= "Add A Review (optional)"
                name="Review"
                onChange={this.handleReviewChange}
              />
            </label>
          </div>
            </div>
            <div className="button-group">
              <button className="small button secondary" onClick={this.handleClearForm}>Clear</button>
              <input className="small button secondary" type="submit" value="Submit" />
            </div>
        </form>
      </div>
    )
  }
}

export default PlaceFormContainer;
