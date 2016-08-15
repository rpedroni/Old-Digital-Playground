import React, { PropTypes } from 'react'

import NumericInput from './NumericInput'

class BitInput extends React.Component {
  render() {
    const { onUpdate } = this.props
    return (
     <NumericInput
       validDigits={[0, 1]}
       onUpdate={onUpdate}
       hintText="Insira o valor em binário" />
    )
  }
}
BitInput.propTypes = {
  onUpdate: PropTypes.func.isRequired,
}

export default BitInput
