import React, { PropTypes } from 'react'

class Title extends React.Component {
  render() {
    return (
      <h1 style={{ fontSize: 24, borderBottom: '5px double black' }}>
        {this.props.children}
      </h1>
    )
  }
}
Title.propTypes = {
  children: PropTypes.any,
}

export default Title
