import React from 'react'
import { browserHistory, Route, IndexRoute, Router, withRouter } from 'react-router'
import PlacesIndexContainer from './containers/PlacesIndexContainer'
import PlacesShowContainer from './containers/PlacesShowContainer'


const App = (props) => {
  return(
    <Router history={browserHistory}>

      <Route path='/'>
      <IndexRoute component={PlacesIndexContainer} />
      <Route path="/places/:id" component={PlacesShowContainer}/>
      </Route>
    </Router>
  )
}

export default App
