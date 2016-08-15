import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'cont/App'
import HomeContainer from 'cont/HomeContainer'
import AnalogAndDigitalContainer from 'cont/AnalogAndDigitalContainer'
import NumericSystemsContainer from 'cont/NumericSystemsContainer'
// import BitsAndBytesContainer from 'cont/BitsAndBytesContainer'

const routes = (
  <Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="ad" component={AnalogAndDigitalContainer} />
      <Route path="numericos" component={NumericSystemsContainer} />
    </Route>

  </Router>
)

export default routes
