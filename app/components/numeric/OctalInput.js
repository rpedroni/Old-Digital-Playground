import React, { PropTypes } from 'react'

import NumericInput from './NumericInput'

class OctalInput extends React.Component {
  render() {
    const { onUpdate } = this.props
    return (
     <NumericInput
       validDigits={[0, 1, 2, 3, 4, 5, 6, 7]}
       onUpdate={onUpdate}
       hintText="Insira o valor em octal" />
    )
  }
}
OctalInput.propTypes = {
  onUpdate: PropTypes.func.isRequired,
}

export default OctalInput
