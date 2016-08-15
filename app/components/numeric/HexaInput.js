import React, { PropTypes } from 'react'

import NumericInput from './NumericInput'

class HexaInput extends React.Component {

  render() {
    const { onUpdate } = this.props
    return (
      <NumericInput
        validDigits={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']}
        onUpdate={onUpdate}
        hintText="Insira o valor em hexa"
        />
    )
  }
}
HexaInput.propTypes = {
  onUpdate: PropTypes.func.isRequired,
}

export default HexaInput
