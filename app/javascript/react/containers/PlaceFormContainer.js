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
      description: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleCityChange = this.handleCityChange.bind(this)
    this.handleStateChange = this.handleStateChange.bind(this)
    this.handleCountryChange = this.handleCountryChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)

    this.handleClearForm = this.handleClearForm.bind(this)
    this.validateName = this.validateName.bind(this)
    this.validateAddress = this.validateAddress.bind(this)
    this.addPlace = this.addPlace.bind(this)
  }

  validateName(name) {
    // This is not good enough validation but we'll come back to it
    if(name.trim() === '') {
      let newError = { body: 'You must enter a name.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.body
      this.setState({ errors: errorState })
      return true
    }
  }


  validateAddress(address) {
    if(address.trim() === '') {
      let newError = { title: 'You must enter an address.' }
      this.setState({ errors: Object.assign(this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.title
      this.setState({ errors: errorState })
      return true
    }
  }

  handleClearForm(event) {
    event.preventDefault()
    this.setState({ name: '',
    address: '',
    city: '',
    state: '',
    country: '',
    description: '',
    errors: {}})
  }

  handleNameChange(event) {
    this.validateTitle(event.target.value)
    this.setState({ name: event.target.value })
  }

  handleAddressChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ address: event.target.value })
  }

  handleCityChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ city: event.target.value })
  }

  handleStateChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ state: event.target.value })
  }

  handleCountryChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ country: event.target.value })
  }

  handleDescriptionChange(event) {
    this.validateHexcode(event.target.value)
    this.setState({ description: event.target.value })
  }

  addPlace(submission) {
    fetch(`/api/v1/places`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submission)
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();

    if(this.validateTitle(this.state.name) &&
       this.validateHexcode(this.state.address) ) {

      let formPayload = {
        place: {
          name: this.state.name,
          address: this.state.address,
          city: this.state.city,
          state: this.state.state,
          country: this.state.country,
          description: this.state.description
        }
      }

      this.addPlace(formPayload)
    }
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <form className=" callout" onSubmit={this.handleFormSubmit}>
        {errorDiv}
        <TextField
          content={this.state.name}
          label="Name"
          name="name"
          handlerFunction={this.handleNameChange}
        />
        <TextField
          content={this.state.address}
          label="Street Name"
          name="street"
          handlerFunction={this.handleAddressChange}
        />
        <TextField
          content={this.state.city}
          label="City"
          name="city"
          handlerFunction={this.handleCityChange}
        />
        <TextField
          content={this.state.state}
          label="State"
          name="state"
          handlerFunction={this.handleStateChange}
        />
        <TextField
          content={this.state.country}
          label="Country"
          name="country"
          handlerFunction={this.handleCountryChange}
        />
        <TextField
          content={this.state.description}
          label="Description"
          name="description"
          handlerFunction={this.handleDescriptionChange}
        />

        <div className="button-group">
          <button className="button" onClick={this.handleClearForm}>Clear</button>
          <input className="button" type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

export default PlaceFormContainer;
