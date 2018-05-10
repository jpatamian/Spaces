import React from 'react'
import { browserHistory, Route, IndexRoute, Router, withRouter } from 'react-router'
import PlacesIndexContainer from './containers/PlacesIndexContainer'
import PlacesShowContainer from './containers/PlacesShowContainer'
import PlaceFormContainer from './containers/PlaceFormContainer'
import YelpFormContainer from './containers/YelpFormContainer'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route >
        <Route path='/' component={YelpFormContainer}/>
        <Route path='/places' component = {PlacesIndexContainer} />
        <Route path='/places/new' component={PlaceFormContainer} />
        <Route path="/places/:id" component={PlacesShowContainer}/>
        <Route path="*" component={PlacesIndexContainer} />
      </Route>
    </Router>
  )
}

export default App
