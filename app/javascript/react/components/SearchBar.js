// import React, {Component} from 'react'
// import PaletteTile from "./PaletteTile"
//
// class SearchBar extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       places: [],
//       search: '',
//       finalResults: []
//     }
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.handleChange = this.handleChange.bind(this)
//     this.filteredPlaces = this.filteredPlaces.bind(this)
//   }
//
//   componentDidMount() {
//    fetch('api/v1/places')
//      .then(response => {
//        if (response.ok) {
//          return response
//        } else {
//          let errorMessage = `${response.status} (${response.statusText})`
//        }
//      })
//      .then(response => response.json())
//      .then(body =>{
//        this.setState( { places: body } )
//      })
//      .catch(error => console.error(`${error.message}`))
//   }
//
//   handleChange(event) {
//     this.setState({search: event.target.value})
//   }
//
//   handleSubmit(event) {
//     event.preventDefault()
//     let formPayload = {
//       search: this.state.search
//     }
//     this.filteredPlaces(formPayload)
//   }
//
//   filteredPlaces(formPayload) {
//     let searchResults = []
//     let search = formPayload.search.toString().toLowerCase();
//     this.state.places.forEach((place) => {
//       if (place["state"].toLowerCase().includes(search)) {
//        searchResults.push(place)
//      }
//       this.setState({ finalResults: searchResults })
//     })
//   }
//
//   render() {
//     let finalResults = this.state.finalResults.map(palette => {
//       return(
//         <PaletteTile
//           key = {palette.id}
//           id = {palette.id}
//           title = {palette.title}
//           description = {palette.description}
//           hexcodes = {palette.hexcodes}
//         />
//       )
//     })
//     return(
//      <div id="index-container">
//        <div id="searchbar">
//          <input
//            id="search"
//            type='text'
//            value={this.state.search}
//            onChange={this.handleChange}
//            placeholder="Enter search terms"
//          />
//          <input type = 'submit' value = 'Search' onClick = {this.handleSubmit}/>
//        </div>
//        <div className="row">
//          {finalResults}
//        </div>
//      </div>
//    )
//   }
// }
//
// export default SearchBar
