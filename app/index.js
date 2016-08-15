import React from 'react'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import routes from 'config/routes'

injectTapEventPlugin()
ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    {routes}
  </MuiThemeProvider>,
  document.getElementById('app')
)
