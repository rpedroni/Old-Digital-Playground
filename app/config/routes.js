import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from 'cont/App'
import HomeContainer from 'cont/HomeContainer'
import AnalogAndDigital from 'cont/AnalogAndDigital'
import BitsAndBytesContainer from 'cont/BitsAndBytesContainer'

const routes = (
  <Router history={browserHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="ad" component={AnalogAndDigital} />
      <Route path="bits-bytes" component={BitsAndBytesContainer} />
    </Route>

  </Router>
)

export default routes
