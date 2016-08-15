import React, { PropTypes } from 'react'

import NumericInput from './NumericInput'

class DecimalInput extends React.Component {
  render() {
    const { onUpdate } = this.props
    return (
     <NumericInput
       validDigits={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]}
       onUpdate={onUpdate}
       hintText="Insira o valor em decimal" />
    )
  }
}
DecimalInput.propTypes = {
  onUpdate: PropTypes.func.isRequired,
}

export default DecimalInput
