import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import App from 'cont/App'
import Home from 'cont/Home'
import AnalogAndDigital from 'cont/AnalogAndDigital'
import BitsAndBytes from 'cont/BitsAndBytes'

const Root = () => {
  return (
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Router history={browserHistory}>

        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="ad" component={AnalogAndDigital} />
          <Route path="bytes" component={BitsAndBytes} />
        </Route>

      </Router>
    </MuiThemeProvider>
  )
}

injectTapEventPlugin()
ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
