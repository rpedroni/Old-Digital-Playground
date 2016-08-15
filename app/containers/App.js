import React, { PropTypes } from 'react'

import Sidebar from 'comp/Sidebar'
import AppBar from 'mui/AppBar'

const DRAWER_WIDTH = 210

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
        { title: 'Home', url: '/' },
        { title: 'Analógico & Digital', url: 'ad' },
        { title: 'Sistemas Numéricos', url: 'numericos' },
        // { title: 'Bits & Bytes', url: 'bits-bytes' },
        // { title: 'Álgebra Booleana', url: 'ad' },
        // { title: 'Portas Lógicas', url: 'ad' },
      ]
    }
    this.routeToUrl = this.routeToUrl.bind(this)
  }

  routeToUrl(item) {
    this.context.router.push(item.url)
  }

  render() {

    const { menuItems } = this.state

    return (
      <div>

        <Sidebar
          width={DRAWER_WIDTH}
          menuItems={menuItems}
          onMenuItemSelect={this.routeToUrl} />

        <div style={{ marginLeft: DRAWER_WIDTH, padding: 0 }}>
          <AppBar showMenuIconButton={false} />
          <div style={{ padding: 20 }}>
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object.isRequired,
}

App.propTypes = {
  children: PropTypes.any.isRequired,
}

export default App
