import React from 'react'
import { browserHistory, Route, IndexRoute, Router, withRouter } from 'react-router'
import PlacesIndexContainer from './containers/PlacesIndexContainer'


const App = (props) => {
  return(
    <Router history={browserHistory}>

      <Route path='/'>
      <IndexRoute component={PlacesIndexContainer} />

      </Route>
    </Router>
  )
}

export default App
