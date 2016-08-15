import React, { PropTypes } from 'react'

import Drawer from 'mui/Drawer'
import AppBar from 'mui/AppBar'
import MenuItem from 'mui/MenuItem'

class Sidebar extends React.Component {
  render() {
    const { width, menuItems, onMenuItemSelect } = this.props
    return (
      <Drawer open={true} width={width}>

        <AppBar
          title="Playground Digital"
          showMenuIconButton={false}
          titleStyle={{ fontSize: 16 }} />

        {menuItems.map((menuItem, index) => {
          return (
            <MenuItem key={index} onClick={onMenuItemSelect.bind(null, menuItem)}>
              {menuItem.title}
            </MenuItem>
          )
        })}


      </Drawer>
    )
  }
}

Sidebar.propTypes = {
  width: PropTypes.number.isRequired,
  menuItems: PropTypes.array.isRequired,
  onMenuItemSelect: PropTypes.func.isRequired,
}

export default Sidebar
