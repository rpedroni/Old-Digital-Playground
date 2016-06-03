import React from 'react'

class Underline extends React.Component {
  render() {
    return (
     <span style={{ borderBottom: '2px solid rgb(111,111,111)' }}>
       {this.props.children}
     </span>
    )
  }
}

export default Underline
