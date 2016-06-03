import React from 'react'
import Drawer from 'mui/Drawer'
import AppBar from 'mui/AppBar'
import Menu from 'mui/Menu'
import MenuItem from 'mui/MenuItem'
import { Link, withRouter } from 'react-router'

// Include css
require('style/app.scss')

const DRAWER_WIDTH = 200

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menuItems: [
        { title: 'Analógico & Digital', to: 'ad' },
        { title: 'Bits & Bytes', to: 'bytes' },
        { title: 'Álgebra Booleana', to: 'ad' },
        { title: 'Portas Lógicas', to: 'ad' },
      ]
    }
  }

  render() {

    const { router } = this.props

    return (
      <div>

        <Drawer open={true} width={DRAWER_WIDTH}>

          <AppBar
            title="Playground Digital"
            showMenuIconButton={false}
            titleStyle={{ fontSize: 16 }} />


          {this.state.menuItems.map((menuItem, index) => {
              return (
                <MenuItem onClick={() => { router.push(menuItem.to) }}
                  key={index}
                  >
                  {menuItem.title}
                </MenuItem>
              )
            })}


        </Drawer>

        <div style={{ marginLeft: DRAWER_WIDTH }}>
          <AppBar showMenuIconButton={false} />
          <div className="content">
            {this.props.children}
          </div>
        </div>

      </div>
    )
  }
}

export default withRouter(App)
