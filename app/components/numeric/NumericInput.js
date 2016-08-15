import React, { PropTypes } from 'react'

import TextField from 'mui/TextField'

class NumericInput extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e, stringValue) {
    const { validDigits, onUpdate } = this.props
    const value = stringValue.split('').filter(char =>
      validDigits.indexOf((char+'').toLowerCase()) !== -1 ||
      validDigits.indexOf(+char) !== -1
    ).join('').toUpperCase()
    this.setState({
      value
    })
    // Signal parent
    onUpdate(value)
  }

  render() {
    const { value } = this.state
    const { hintText } = this.props
    return (
      <TextField
        value={value}
        hintText={hintText}
        onChange={this.onChange} />
    )
  }
}

NumericInput.propTypes = {
  validDigits: PropTypes.array.isRequired,
  onUpdate: PropTypes.func.isRequired,
  hintText: PropTypes.string,
}

export default NumericInput
