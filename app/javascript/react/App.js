import React from 'react'
import { browserHistory, Route, IndexRoute, Router, withRouter } from 'react-router'
import PlacesIndexContainer from './containers/PlacesIndexContainer'
import PlacesShowContainer from './containers/PlacesShowContainer'
import MapContainer from './containers/MapContainer';


const App = (props) => {
  return(
    <Router history={browserHistory}>

      <Route path='/'>
      <IndexRoute component={PlacesIndexContainer} />
      <Route path="/places/:id" component={PlacesShowContainer}/>
      <Route path="*" component={PlacesIndexContainer} />
      <Route path='/maps' component={MapContainer} />

      </Route>
    </Router>
  )
}

export default App
